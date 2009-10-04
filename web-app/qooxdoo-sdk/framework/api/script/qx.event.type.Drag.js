{type:"class",attributes:{"name":"Drag","packageName":"qx.event.type","superClass":"qx.event.type.Event","fullName":"qx.event.type.Drag","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Event object class for drag events</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"addAction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"action"},children:[{type:"desc",attributes:{"text":"<p>Action to add to the list of supported actions</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Used during <code>dragstart</code> listener to\ninform the manager about supported drop actions.</p>"}}]},{type:"method",attributes:{"name":"addData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Any valid type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"data"},children:[{type:"desc",attributes:{"text":"<p>Any data to store</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds data of the given type to the internal storage. The data\nis available until the <code>dragend</code> event is fired.</p>"}}]},{type:"method",attributes:{"name":"addType"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Data type to add to list of supported types</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Used during <code>dragstart</code> listener to\ninform the manager about supported data types.</p>"}}]},{type:"method",attributes:{"docFrom":"qx.event.type.Event","overriddenFrom":"qx.event.type.Event","name":"clone"},children:[{type:"params",children:[{type:"param",attributes:{"name":"embryo"}}]}]},{type:"method",attributes:{"name":"getCurrentAction"},children:[{type:"desc",attributes:{"text":"<p>Returns the currently selected action. Depends on the\nsupported actions of the source target and the modification\nkeys pressed by the user.</p>\n\n<p>Used in the <code>droprequest</code> listener.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The action. May be one of <code>move</code>,\n   <code>copy</code> or <code>alias</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getCurrentType"},children:[{type:"desc",attributes:{"text":"<p>Returns the type which was requested last, to be used\nin the <code>droprequest</code> listener.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The last requested data type</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Any of the supported types.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the data of the given type. Used in the <code>drop</code> listener.</p>"}}]},{type:"method",attributes:{"name":"getDocumentLeft"},children:[{type:"desc",attributes:{"text":"<p>Get the horizontal position at which the event occurred relative to the\nleft of the document. This property takes into account any scrolling of\nthe page.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The horizontal mouse position in the document.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getDocumentTop"},children:[{type:"desc",attributes:{"text":"<p>Get the vertical position at which the event occurred relative to the\ntop of the document. This property takes into account any scrolling of\nthe page.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The vertical mouse position in the document.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getManager"},children:[{type:"desc",attributes:{"text":"<p>Returns the drag&amp;drop event handler responsible for the target</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The drag&amp;drop handler</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.handler.DragDrop"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.event.type.Event","name":"init"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"false","name":"cancelable"},children:[{type:"desc",attributes:{"text":"<p>Whether or not an event can have its default\n    action prevented. The default action can either be the browser&#8217;s\n    default action of a native event (e.g. open the context menu on a\n    right click) or the default action of a qooxdoo class (e.g. close\n    the window widget). The default action can be prevented by calling\n    {@link #preventDefault}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"originalEvent"},children:[{type:"desc",attributes:{"text":"<p>The original (mouse) event to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Initialize the fields of the event. The event must be initialized before\nit can be dispatched.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The initialized event instance</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"method",attributes:{"name":"supportsAction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"action"},children:[{type:"desc",attributes:{"text":"<p>The action to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given action is supported by the drag\ntarget (source target).</p>\n\n<p>This is used in the event listeners for <code>dragover</code>\nor <code>dragdrop</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the given action is supported</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"supportsType"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>The type to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given type is supported by the drag\ntarget (source target).</p>\n\n<p>This is used in the event listeners for <code>dragover</code>\nor <code>dragdrop</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the given type is supported</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}