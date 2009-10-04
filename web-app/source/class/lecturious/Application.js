/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(lecturious/*)

************************************************************************ */


/**
 * This is the main application class of your custom application "lecturious"
 */




qx.Class.define("lecturious.Application",
{
  extend : qx.application.Standalone,


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {



    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     */
    main : function()
    {
      // Call super class
      this.base(arguments);
      qx.core.Setting.set('qx.ioRemoteDebug', true);


qx.Class.define("lecturious.RemoteDataModel",
{
  extend : qx.ui.table.model.Remote,
 
  construct: function() {
      this.base(arguments);
  },

  members :
  {
     // overloaded - called whenever the table requests the row count
    _loadRowCount : function()
    {
      // Call the backend service (example) - using XmlHttp 
      var url  = "/lecturious-grails/service/countRows";
      var req = new qx.io.remote.Request(url, "GET", "application/json");

      //req.setCrossDomain(true);
      req.setTimeout(5000);
 
      // Add listener
      req.addListener("completed", this._onRowCountCompleted, this);
      req.addListener("failed", this.failed, this);
      req.addListener("timeout", this.failed, this);
      req.addListener("aborted", this.failed, this);
      // send request
      req.send();
    },

    failed : function(response) {
      var test = response.getStatusCode();	      
      
      var t = "";
      //debug(this, "StatusCode: " + response.statusCode);
    },
 
    // Listener for request of "_loadRowCount" method
    _onRowCountCompleted : function(response)
    {
       var result = response.getContent();
       if (result != null)
       {
          // Apply it to the model - the method "_onRowCountLoaded" has to be called
          this._onRowCountLoaded(result[0]);
       }
    },
 
   
    // overloaded - called whenever the table requests new data
    _loadRowData : function(firstRow, lastRow)
    {
       // Call the backend service (example) - using XmlHttp 
       var baseUrl  = "http://localhost:8080/lecturious-grails/service/getRows";
       var parameters = "?from=" + firstRow + "&to=" + lastRow;
       var url = baseUrl + parameters;
       var req = new qx.io.remote.Request(url, "GET", "application/json");
       //req.setCrossDomain(true);
       req.setTimeout(5000);
 
       // Add listener
       req.addListener("completed", this._onLoadRowDataCompleted, this);      
  
       // send request
       req.send();
    },
 
     // Listener for request of "_loadRowData" method
    _onLoadRowDataCompleted : function(response)
    {
        var result = response.getContent();
       if (result != null)
       {
          // Apply it to the model - the method "_onRowDataLoaded" has to be called
          this._onRowDataLoaded(result);   
       }        
    }
  }
});
      // Enable logging in debug variant
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Document is the application root
    
      var mainSplit = new qx.ui.splitpane.Pane("horizontal");
      
      mainSplit.add(this.leftSide())
      mainSplit.add(this.rightSide());

      var doc = this.getRoot();
      doc.add(mainSplit, {edge: 0});
  /*
      mainSplit.set({
        width: doc.width,
        height: doc.height,
        decorator : null
      });
*/

    },

  

    courseTable : function() 
    {

      var model = new qx.ui.table.model.Simple();

      var rowData = [["1", "VO Mathematik 1"], ["2", "UE Mathematik 1"],["3", "VU Grundzüge der Informatik"]];

      // table model
      /*
      var tableModel = this._tableModel = new qx.ui.table.model.Simple();

      tableModel.setColumns(["Nr", "University"]);
      tableModel.setData(rowData);
      tableModel.setColumnEditable(1, false);
      tableModel.setColumnEditable(2, false);
      
      */
      // Display a checkbox in column 3
      //tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());

      // use a different header renderer
      //tcm.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Icon("icon/16/apps/office-calendar.png", "A date"));

      
  /*
      table.set({
	width: 600,
	height: 400,
	de­co­ra­tor : null
      });
*/  
      // table.minWidth = 200


      // table
      var remoteModel = this.remoteModel();

      var table = new qx.ui.table.Table(remoteModel);

      table.set({
        width: 600,
        height: 400,
        decorator : null
      });

      table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);

      var tcm = table.getTableColumnModel();


      return table;
    },

    uniTree : function() {
      var uniTree = new qx.ui.tree.Tree();

      var rootFolder = new qx.ui.tree.TreeFolder("All universities");
      uniTree.setRoot(rootFolder);

      rootFolder.setOpen(true);
      rootFolder.add(new qx.ui.tree.TreeFile("TU Wien"));
      rootFolder.add(new qx.ui.tree.TreeFile("Universität Wien"));

      return uniTree;
    },

   leftSide: function () {
      var leftSide = new qx.ui.splitpane.Pane("vertical");
      leftSide.add(this.uniTree());
      leftSide.add(this.courseTable());
      return leftSide;
    },

    rightSide: function() {
       var composite = new qx.ui.container.Composite()

      // configure it with a horizontal box layout with a spacing of '5'
      composite.setLayout(new qx.ui.layout.HBox(5));

      // add some children
      composite.add(new qx.ui.basic.Label("Name: "));
      composite.add(new qx.ui.form.TextField());
      return composite;
    },

    remoteModel : function() {
      var remote = new lecturious.RemoteDataModel();
      remote.setColumnIds([ "id", "name", "university", "professor"]);
      remote.setColumns(["ID", "Name", "University", "Professor"]);  
      return remote;
    }
  }
});


