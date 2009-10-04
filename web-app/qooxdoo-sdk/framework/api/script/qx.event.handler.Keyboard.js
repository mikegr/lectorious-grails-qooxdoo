{type:"class",attributes:{"name":"Keyboard","interfaces":"qx.event.IEventHandler","superClass":"qx.core.Object","fullName":"qx.event.handler.Keyboard","type":"class","packageName":"qx.event.handler"},children:[{type:"desc",attributes:{"text":"<p>This class provides unified key event handler for Internet Explorer,\nFirefox, Opera and Safari.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"manager"},children:[{type:"desc",attributes:{"text":"<p>Event manager for the window to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.Manager"}}]}]}]},{type:"desc",attributes:{"text":"<p>Create a new instance</p>"}}]}]},{type:"constants",children:[{type:"constant",attributes:{"name":"PRIORITY"},children:[{type:"desc",attributes:{"text":"<p>Priority of this handler</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"name":"TARGET_CHECK"},children:[{type:"desc",attributes:{"text":"<p>Which target check to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"IGNORE_CAN_HANDLE","value":"true"},children:[{type:"desc",attributes:{"text":"<p>Whether the method &#8220;canHandleEvent&#8221; must be called</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"name":"SUPPORTED_TYPES"},children:[{type:"desc",attributes:{"text":"<p>Supported event types</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"isValidKeyIdentifier"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyIdentifier"},children:[{type:"desc",attributes:{"text":"<p>The key identifier.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Checks whether a given string is a valid keyIdentifier</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the given string is a valid keyIdentifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__firefoxInputFix"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>The event target</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>The event type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>the key code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>some keys like &#8220;up&#8221;, &#8220;down&#8221;, &#8220;pageup&#8221;, &#8220;pagedown&#8221; do not bubble a\n&#8220;keypress&#8221; event in Firefox. To work around this bug we attach keypress\nlisteners directly to the input events.</p>\n\n<p><a href=\"https://bugzilla.mozilla.org/show_bug.cgi?id=467513\">https://bugzilla.mozilla.org/show_bug.cgi?id=467513</a></p>"}}]},{type:"method",attributes:{"access":"private","name":"__onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"domEvent"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Low level key press handler</p>"}}]},{type:"method",attributes:{"access":"internal","isInternal":"true","name":"__onKeyUpDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"domEvent"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Low level handler for &#8220;keyup&#8221; and &#8220;keydown&#8221; events</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_charCodeToIdentifier"},children:[{type:"params",children:[{type:"param",attributes:{"name":"charCode"},children:[{type:"desc",attributes:{"text":"<p>character code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>converts a character code to the corresponding identifier</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>key identifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_fireInputEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"domEvent"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]},{type:"param",attributes:{"name":"charCode"},children:[{type:"desc",attributes:{"text":"<p>character code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Fire a key input event with the given parameters</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_fireSequenceEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"domEvent"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>type og the event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"keyIdentifier"},children:[{type:"desc",attributes:{"text":"<p>key identifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Fire a key up/down/press event with the given parameters</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_idealKeyHandler"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>keyboard code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"charCode"},children:[{type:"desc",attributes:{"text":"<p>character code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"eventType"},children:[{type:"desc",attributes:{"text":"<p>type of the event (keydown, keypress, keyup)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"domEvent"},children:[{type:"desc",attributes:{"text":"<p>DomEvent</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Key handler for an idealized browser.\nRuns after the browser specific key handlers have normalized the key events.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_identifierToKeyCode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyIdentifier"},children:[{type:"desc",attributes:{"text":"<p>The key identifier to convert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>converts a key identifier back to a keycode</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>keyboard code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_initKeyObserver"},children:[{type:"desc",attributes:{"text":"<p>Initializes the native key event listeners.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_isIdentifiableKeyCode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>key code to check.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Check whether the keycode can be reliably detected in keyup/keydown events</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the keycode can be reliably detected in keyup/keydown events.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_isNonPrintableKeyCode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>key code to check.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Checks whether the keyCode represents a non printable key</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the keyCode represents a non printable key.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_keyCodeToIdentifier"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>key code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>converts a keyboard code to the corresponding identifier</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>key identifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_stopKeyObserver"},children:[{type:"desc",attributes:{"text":"<p>Stops the native key event listeners.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"canHandleEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}}]}]},{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"registerEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"capture"}}]}]},{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"unregisterEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"capture"}}]}]}]}]}