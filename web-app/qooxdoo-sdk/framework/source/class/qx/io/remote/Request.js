/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2006 Derrell Lipman

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Derrell Lipman (derrell)

************************************************************************ */

/**
 * This class is used to send HTTP requests to the server.
 */
qx.Class.define("qx.io.remote.Request",
{
  extend : qx.core.Object,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param vUrl {String}
   *   Target url to issue the request to.
   *
   * @param vMethod {String}
   *   Determines that type of request to issue (GET or POST). Default is GET.
   *
   * @param vResponseType {String}
   *   The mime type of the response. Default is text/plain.
   */
  construct : function(vUrl, vMethod, vResponseType)
  {
    this.base(arguments);

    this.__requestHeaders = {};
    this.__urlParameters = {};
    this.__dataParameters = {};
    this.__formFields = {};

    if (vUrl !== undefined) {
      this.setUrl(vUrl);
    }

    if (vMethod !== undefined) {
      this.setMethod(vMethod);
    }

    if (vResponseType !== undefined) {
      this.setResponseType(vResponseType);
    }

    this.setProhibitCaching(true);

    // Get the next sequence number for this request
    this.__seqNum = ++qx.io.remote.Request.__seqNum;
  },




  /*
  *****************************************************************************
     EVENTS
  *****************************************************************************
  */

  events : {

    /** Fired when the Request object changes its state to 'created' */
    "created" : "qx.event.type.Event",

    /** Fired when the Request object changes its state to 'configured' */
    "configured" : "qx.event.type.Event",

    /** Fired when the Request object changes its state to 'sending' */
    "sending" : "qx.event.type.Event",

    /** Fired when the Request object changes its state to 'receiving' */
    "receiving" : "qx.event.type.Event",

    /**
     * Fired once the request has finished successfully. The event object
     * can be used to read the transferred data.
     */
    "completed" : "qx.io.remote.Response",

    /** Fired when the pending request has been aborted. */
    "aborted" : "qx.io.remote.Response",

    /** Fired when the pending request failes. */
    "failed" : "qx.io.remote.Response",

    /** Fired when the pending request times out. */
    "timeout" : "qx.io.remote.Response"
  },



  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /*
    ---------------------------------------------------------------------------
      SEQUENCE NUMBER
    ---------------------------------------------------------------------------
    */

    /**
     * Sequence (id) number of a request, used to associate a response or error
     * with its initiating request.
     */
    __seqNum : 0
  },




  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /**
     * Target url to issue the request to.
     */
    url :
    {
      check : "String",
      init : ""
    },


    /**
     * Determines what type of request to issue (GET or POST).
     */
    method :
    {
      check : [ "GET", "POST", "PUT", "HEAD", "DELETE" ],
      apply : "_applyMethod",
      init : "GET"
    },


    /**
     * Set the request to asynchronous.
     */
    asynchronous :
    {
      check : "Boolean",
      init : true
    },


    /**
     * Set the data to be sent via this request
     */
    data :
    {
      check : "String",
      nullable : true
    },


    /**
     * Username to use for HTTP authentication.
     * Set to NULL if HTTP authentication is not used.
     */
    username :
    {
      check : "String",
      nullable : true
    },


    /**
     * Password to use for HTTP authentication.
     * Set to NULL if HTTP authentication is not used.
     */
    password :
    {
      check : "String",
      nullable : true
    },


    /**
     * The state that the request is in, while being processed.
     */
    state :
    {
      check : [ "configured", "queued", "sending", "receiving", "completed", "aborted", "timeout", "failed" ],
      init : "configured",
      apply : "_applyState",
      event : "changeState"
    },


    /**
     * Response type of request.
     *
     * The response type is a MIME type, default is text/plain. Other supported
     * MIME types are text/javascript, text/html, application/json,
     * application/xml.
     */
    responseType :
    {
      check : [ "text/plain", "text/javascript", "application/json", "application/xml", "text/html" ],
      init : "text/plain",
      apply : "_applyResponseType"
    },


    /**
     * Number of millieseconds before the request is being timed out.
     *
     * If this property is null, the timeout for the request comes is the
     * qx.io.remote.RequestQueue's property defaultTimeout.
     */
    timeout :
    {
      check : "Integer",
      nullable : true
    },


    /**
     * Prohibit request from being cached.
     *
     * Setting the value to <i>true</i> adds a parameter "nocache" to the
     * request URL with a value of the current time, as well as adding request
     * headers Pragma:no-cache and Cache-Control:no-cache.
     *
     * Setting the value to <i>false</i> removes the parameter and request
     * headers.
     *
     * As a special case, this property may be set to the string value
     * "no-url-params-on-post" which will prevent the nocache parameter from
     * being added to the URL if the POST method is used but will still add
     * the Pragma and Cache-Control headers.  This is useful if your backend
     * does nasty things like mixing parameters specified in the URL into
     * form fields in the POST request.  (One example of this nasty behavior
     * is known as "mixed mode" in Oracle, as described here:
     * http://download.oracle.com/docs/cd/B32110_01/web.1013/b28963/concept.htm#i1005684)
     */
    prohibitCaching :
    {
      check : function(v)
      {
        return typeof v == "boolean" || v === "no-url-params-on-post";
      },
      init : true,
      apply : "_applyProhibitCaching"
    },


    /**
     * Indicate that the request is cross domain.
     *
     * A request is cross domain if the request's URL points to a host other than
     * the local host. This switches the concrete implementation that is used for
     * sending the request from qx.io.remote.transport.XmlHttp to
     * qx.io.remote.transport.Script, because only the latter can handle cross
     * domain requests.
     */
    crossDomain :
    {
      check : "Boolean",
      init : false
    },


    /**
     * Indicate that the request will be used for a file upload.
     *
     * The request will be used for a file upload.  This switches the concrete
     * implementation that is used for sending the request from
     * qx.io.remote.transport.XmlHttp to qx.io.remote.IFrameTransport, because only
     * the latter can handle file uploads.
     */
    fileUpload :
    {
      check : "Boolean",
      init : false
    },


    /**
     * The transport instance used for the request.
     *
     * This is necessary to be able to abort an asynchronous request.
     */
    transport :
    {
      check : "qx.io.remote.Exchange",
      nullable : true
    },


    /**
     * Use Basic HTTP Authentication.
     */
    useBasicHttpAuth :
    {
      check : "Boolean",
      init : false
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {

    __requestHeaders : null,
    __urlParameters : null,
    __dataParameters : null,
    __formFields : null,
    __seqNum : null,

    /*
    ---------------------------------------------------------------------------
      CORE METHODS
    ---------------------------------------------------------------------------
    */

    /**
     * Schedule this request for transport to server.
     *
     * The request is added to the singleton class qx.io.remote.RequestQueue's
     * list of pending requests.
     *
     * @return {void}
     */
    send : function() {
      qx.io.remote.RequestQueue.getInstance().add(this);
    },


    /**
     * Abort sending this request.
     *
     * The request is removed from the singleton class qx.io.remote.RequestQueue's
     * list of pending events. If the request haven't been scheduled this
     * method is a noop.
     *
     * @return {void}
     */
    abort : function() {
      qx.io.remote.RequestQueue.getInstance().abort(this);
    },


    /**
     * Abort sending this request if it has not already been aborted.
     *
     * @return {void}
     */
    reset : function()
    {
      switch(this.getState())
      {
        case "sending":
        case "receiving":
          this.error("Aborting already sent request!");

          // no break

        case "queued":
          this.abort();
          break;
      }
    },




    /*
    ---------------------------------------------------------------------------
      STATE ALIASES
    ---------------------------------------------------------------------------
    */

    /**
     * Determine if this request is in the configured state.
     *
     * @return {Boolean} <true> if the request is in the configured state; <false> otherwise.
     */
    isConfigured : function() {
      return this.getState() === "configured";
    },


    /**
     * Determine if this request is in the queued state.
     *
     * @return {Boolean} <true> if the request is in the queued state; <false> otherwise.
     */
    isQueued : function() {
      return this.getState() === "queued";
    },


    /**
     * Determine if this request is in the sending state.
     *
     * @return {Boolean} <true> if the request is in the sending state; <false> otherwise.
     */
    isSending : function() {
      return this.getState() === "sending";
    },


    /**
     * Determine if this request is in the receiving state.
     *
     * @return {Boolean} <true> if the request is in the receiving state; <false> otherwise.
     */
    isReceiving : function() {
      return this.getState() === "receiving";
    },


    /**
     * Determine if this request is in the completed state.
     *
     * @return {Boolean} <true> if the request is in the completed state; <false> otherwise.
     */
    isCompleted : function() {
      return this.getState() === "completed";
    },


    /**
     * Determine if this request is in the aborted state.
     *
     * @return {Boolean} <true> if the request is in the aborted state; <false> otherwise.
     */
    isAborted : function() {
      return this.getState() === "aborted";
    },


    /**
     * Determine if this request is in the timeout state.
     *
     * @return {Boolean} <true> if the request is in the timeout state; <false> otherwise.
     */
    isTimeout : function() {
      return this.getState() === "timeout";
    },


    /**
     * Determine if this request is in the failed state.
     *
     * @return {Boolean} <true> if the request is in the failed state; <false> otherwise.
     */
    isFailed : function() {
      return this.getState() === "failed";
    },




    /*
    ---------------------------------------------------------------------------
      EVENT HANDLER
    ---------------------------------------------------------------------------
    */

    /**
     * Dispatches a clone of the given event on this instance
     *
     * @param e {qx.event.type.Event} The original event
     */
    __forwardEvent : function(e)
    {
      var clonedEvent = e.clone();
      clonedEvent.setTarget(this);
      this.dispatchEvent(clonedEvent);
    },



    /**
     * Event handler called when the request enters the queued state.
     *
     * @param e {qx.event.type.Event} Event indicating state change
     * @return {void}
     */
    _onqueued : function(e)
    {
      // Modify internal state
      this.setState("queued");

      // Bubbling up
      this.__forwardEvent(e);
    },


    /**
     * Event handler called when the request enters the sending state.
     *
     * @param e {qx.event.type.Event} Event indicating state change
     * @return {void}
     */
    _onsending : function(e)
    {
      // Modify internal state
      this.setState("sending");

      // Bubbling up
      this.__forwardEvent(e);
    },


    /**
     * Event handler called when the request enters the receiving state.
     *
     * @param e {qx.event.type.Event} Event indicating state change
     * @return {void}
     */
    _onreceiving : function(e)
    {
      // Modify internal state
      this.setState("receiving");

      // Bubbling up
      this.__forwardEvent(e);
    },


    /**
     * Event handler called when the request enters the completed state.
     *
     * @param e {qx.event.type.Event} Event indicating state change
     * @return {void}
     */
    _oncompleted : function(e)
    {
      // Modify internal state
      this.setState("completed");

      // Bubbling up
      this.__forwardEvent(e);

      // Automatically dispose after event completion
      this.dispose();
    },


    /**
     * Event handler called when the request enters the aborted state.
     *
     * @param e {qx.event.type.Event} Event indicating state change
     * @return {void}
     */
    _onaborted : function(e)
    {
      // Modify internal state
      this.setState("aborted");

      // Bubbling up
      this.__forwardEvent(e);

      // Automatically dispose after event completion
      this.dispose();
    },


    /**
     * Event handler called when the request enters the timeout state.
     *
     * @param e {qx.event.type.Event} Event indicating state change
     * @return {void}
     */
    _ontimeout : function(e)
    {
      /*
        // User's handler can block until timeout.
        switch(this.getState())
        {
          // If we're no longer running...
          case "completed":
          case "timeout":
          case "aborted":
          case "failed":
            // then don't bubble up the timeout event
            return;
        }


    */  // Modify internal state
      this.setState("timeout");

      // Bubbling up
      this.__forwardEvent(e);

      // Automatically dispose after event completion
      this.dispose();
    },


    /**
     * Event handler called when the request enters the failed state.
     *
     * @param e {qx.event.type.Event} Event indicating state change
     * @return {void}
     */
    _onfailed : function(e)
    {
      // Modify internal state
      this.setState("failed");

      // Bubbling up
      this.__forwardEvent(e);

      // Automatically dispose after event completion
      this.dispose();
    },




    /*
    ---------------------------------------------------------------------------
      APPLY ROUTINES
    ---------------------------------------------------------------------------
    */

    /**
     * TODOC
     *
     * @param value {var} Current value
     * @param old {var} Previous value
     */
    _applyState : function(value, old)
    {
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (qx.core.Setting.get("qx.ioRemoteDebug")) {
          this.debug("State: " + value);
        }
      }
    },


    /**
     * TODOC
     *
     * @param value {var} Current value
     * @param old {var} Previous value
     */
    _applyProhibitCaching : function(value, old)
    {
      if (! value)
      {
        this.removeParameter("nocache");
        this.removeRequestHeader("Pragma");
        this.removeRequestHeader("Cache-Control");
        return;
      }

      // If value isn't "no-url-params-on-post" or this isn't a POST request
      if (value !== "no-url-params-on-post" ||
          this.getMethod() != "POST")
      {
        // ... then add a parameter to the URL to make it unique on each
        // request.  The actual id, "nocache" is irrelevant; it's the fact
        // that a (usually) different date is added to the URL on each request
        // that prevents caching.
        this.setParameter("nocache", new Date().valueOf());
      }
      else
      {
        // Otherwise, we don't want the nocache parameer in the URL.
        this.removeParameter("nocache");
      }

      // Add the HTTP 1.0 request to avoid use of a cache
      this.setRequestHeader("Pragma", "no-cache");

      // Add the HTTP 1.1 request to avoid use of a cache
      this.setRequestHeader("Cache-Control", "no-cache");
    },


    /**
     * TODOC
     *
     * @param value {var} Current value
     * @param old {var} Previous value
     */
    _applyMethod : function(value, old)
    {
      if (value === "POST") {
        this.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      } else {
        this.removeRequestHeader("Content-Type");
      }

      // Re-test the prohibit caching property.  We may need to add or remove
      // the "nocache" parameter.  We explicitly call the _apply method since
      // it wouldn't be called normally when setting the value to its already
      // existant value.
      var prohibitCaching = this.getProhibitCaching();
      this._applyProhibitCaching(prohibitCaching, prohibitCaching);
    },


    /**
     * TODOC
     *
     * @param value {var} Current value
     * @param old {var} Previous value
     */
    _applyResponseType : function(value, old) {
      this.setRequestHeader("X-Qooxdoo-Response-Type", value);
    },




    /*
    ---------------------------------------------------------------------------
      REQUEST HEADER
    ---------------------------------------------------------------------------
    */

    /**
     * Add a request header to the request.
     *
     * Example: request.setRequestHeader("Content-Type", "text/html")
     *
     * Please note: Some browsers, such as Safari 3 and 4, will capitalize
     * header field names. This is in accordance with RFC 2616[1], which states
     * that HTTP 1.1 header names are case-insensitive, so your server backend
     * should be case-agnostic when dealing with request headers.
     *
     * [1]{@link http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2}
     *
     * @param vId {String} The identifier to use for this added header
     * @param vValue {String} The value to use for this added header
     * @return {void}
     */
    setRequestHeader : function(vId, vValue) {
      this.__requestHeaders[vId] = vValue;
    },


    /**
     * Remove a previously-added request header
     *
     * @param vId {String} The id of the header to be removed
     * @return {void}
     */
    removeRequestHeader : function(vId) {
      delete this.__requestHeaders[vId];
    },


    /**
     * Retrieve the value of a header which was previously set
     *
     * @param vId {String} The id of the header value being requested
     * @return {String} The value of the header wiith the specified id
     */
    getRequestHeader : function(vId) {
      return this.__requestHeaders[vId] || null;
    },


    /**
     * Return the object containing all of the headers which have been added.
     *
     * @return {Object} The returned object has as its property names each of the ids of headers
     *     which have been added, and as each property value, the value of the
     *     property corresponding to that id.
     */
    getRequestHeaders : function() {
      return this.__requestHeaders;
    },




    /*
    ---------------------------------------------------------------------------
      PARAMETERS
    ---------------------------------------------------------------------------
    */

    /**
     * Add a parameter to the request.
     *
     * @param vId {String}
     *   String identifier of the parameter to add.
     *
     * @param vValue {var}
     *   Value of parameter. May be a string (for one parameter) or an array
     *   of strings (for setting multiple parameter values with the same
     *   parameter name).
     *
     * @param bAsData {Boolean | false}
     *   If <i>false</i>, add the parameter to the URL.  If <i>true</i> then
     *   instead the parameters added by calls to this method will be combined
     *   into a string added as the request data, as if the entire set of
     *   parameters had been pre-build and passed to setData().
     *
     * Note: Parameters requested to be sent as data will be silently dropped
     *       if data is manually added via a call to setData().
     *
     * Note: Some transports, e.g. Script, do not support passing parameters
     *       as data.
     *
     * @return {void}
     */
    setParameter : function(vId, vValue, bAsData)
    {
      if (bAsData)
      {
        this.__dataParameters[vId] = vValue;
      }
      else
      {
        this.__urlParameters[vId] = vValue;
      }
    },


    /**
     * Remove a parameter from the request.
     *
     * @param vId {String}
     *   Identifier of the parameter to remove.
     *
     * @param bFromData {Boolean}
     *   If <i>false</i> then remove the parameter of the URL parameter list.
     *   If <i>true</i> then remove it from the list of parameters to be sent
     *   as request data.
     *
     * @return {void}
     */
    removeParameter : function(vId, bFromData)
    {
      if (bFromData)
      {
        delete this.__dataParameters[vId];
      }
      else
      {
        delete this.__urlParameters[vId];
      }
    },


    /**
     * Get a parameter in the request.
     *
     * @param vId {String}
     *   Identifier of the parameter to get.
     *
     * @param bFromData {Boolean}
     *   If <i>false</i> then retrieve the parameter from the URL parameter
     *   list. If <i>true</i> then retrieve it from the list of parameters to
     *   be sent as request data.
     *
     * @return {var}
     *   The requested parameter value
     *
     */
    getParameter : function(vId, bFromData)
    {
      if (bFromData)
      {
        return this.__dataParameters[vId] || null;
      }
      else
      {
        return this.__urlParameters[vId] || null;
      }
    },


    /**
     * Returns the object containg all parameters for the request.
     *
     * @param bFromData {Boolean}
     *   If <i>false</i> then retrieve the URL parameter list.
     *   If <i>true</i> then retrieve the data parameter list.
     *
     * @return {Object}
     *   The returned object has as its property names each of the ids of
     *   parameters which have been added, and as each property value, the
     *   value of the property corresponding to that id.
     */
    getParameters : function(bFromData)
    {
      return (bFromData ? this.__dataParameters : this.__urlParameters);
    },




    /*
    ---------------------------------------------------------------------------
      FORM FIELDS
    ---------------------------------------------------------------------------
    */

    /**
     * Add a form field to the POST request.
     *
     * NOTE: Adding any programatic form fields using this method will switch the
     *       Transport implementation to IframeTransport.
     *
     * NOTE: Use of these programatic form fields disallow use of synchronous
     *       requests and cross-domain requests.  Be sure that you do not need
     *       those features when setting these programatic form fields.
     *
     * @param vId {String} String identifier of the form field to add.
     * @param vValue {String} Value of form field
     * @return {void}
     */
    setFormField : function(vId, vValue) {
      this.__formFields[vId] = vValue;
    },


    /**
     * Remove a form field from the POST request.
     *
     * @param vId {String} Identifier of the form field to remove.
     * @return {void}
     */
    removeFormField : function(vId) {
      delete this.__formFields[vId];
    },


    /**
     * Get a form field in the POST request.
     *
     * @param vId {String} Identifier of the form field to get.
     * @return {var} TODOC
     */
    getFormField : function(vId) {
      return this.__formFields[vId] || null;
    },


    /**
     * Returns the object containg all form fields for the POST request.
     *
     * @return {Object} The returned object has as its property names each of the ids of
     *     form fields which have been added, and as each property value, the value
     *     of the property corresponding to that id.
     */
    getFormFields : function() {
      return this.__formFields;
    },


    /**
     * Obtain the sequence (id) number used for this request
     *
     * @return {Integer} The sequence number of this request
     */
    getSequenceNumber : function() {
      return this.__seqNum;
    }
  },




  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
    this.setTransport(null);
    this._disposeFields("__requestHeaders",
                        "__urlParameters",
                        "__dataParameters",
                        "__formFields");
  }
});
