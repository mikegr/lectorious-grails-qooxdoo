/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (d_wagner)

************************************************************************ */

/**
 *  This class stores the information needed to instruct a running test to wait.
 *  It is thrown as an exception to be caught by the method executing the test.
 */
qx.Class.define("qx.dev.unit.AsyncWrapper",
{
  extend : qx.core.Object,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param delay {Integer?} The amount of time in milliseconds to wait
   * @param deferredFunction {Function?} The function to run after the timeout
   * has expired.
   */
  construct : function(delay, deferredFunction)
  {
    for (var i=0; i<arguments.length; i++) {
      if (qx.lang.Type.isFunction(arguments[i])) {
        this.setDeferredFunction(arguments[i]);
      } else if (qx.lang.Type.isNumber(arguments[i])) {
        this.setDelay(arguments[i]);
      }
    }
  },

  properties :
  {
    /** The function to run after the timeout has expired */
    deferredFunction :
    {
      check : "Function",
      init : false
    },
    /** The amount of time in milliseconds to wait */
    delay :
    {
      check: "Integer",
      nullable : false,
      init : 5000
    }
  }

});
