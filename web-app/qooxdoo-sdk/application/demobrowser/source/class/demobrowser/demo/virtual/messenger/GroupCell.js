/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("demobrowser.demo.virtual.messenger.GroupCell",
{
  extend : qx.ui.virtual.cell.AbstractWidget,

  events :
  {
    changeOpen : "qx.event.type.Data"
  },


  members :
  {
    _createWidget : function()
    {
      var widget = new qx.ui.basic.Atom().set({
        icon: "decoration/arrows/down-invert.png",
        textColor: "white",
        font: "bold",
        padding: [0, 3]
      });
      widget.addListener("click", function(e) {
        this.fireDataEvent("changeOpen", e.getCurrentTarget());
      }, this);
      return widget;
    },


    updateData : function(widget, data)
    {
      widget.setLabel(data.getName() + " (" + data.getItemCount() + ")");
      if (data.isOpen()) {
        widget.setIcon("decoration/arrows/down-invert.png");
      } else {
        widget.setIcon("decoration/arrows/right-invert.png");
      }
    }
  }
});