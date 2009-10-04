{type:"class",attributes:{"name":"IMarshaler","packageName":"qx.data.marshal","implementations":"qx.data.marshal.Json","fullName":"qx.data.marshal.IMarshaler","type":"interface"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>Defines the methods neede by every marshaler which should work with the\nqooxdoo data stores.</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"toClass"},children:[{type:"params",children:[{type:"param",attributes:{"name":"data"},children:[{type:"desc",attributes:{"text":"<p>The object for which classes should be created.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"includeBubbleEvents"},children:[{type:"desc",attributes:{"text":"<p>Whether the model should support\n  the bubbling of change events or not.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates for the given data the needed classes. The classes contain for\nevery key in the data a property. The classname is always the prefix\n<code>qx.data.model</code>. Two objects containing the same keys will not\ncreate two different classes.</p>"}}]},{type:"method",attributes:{"name":"toModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"data"},children:[{type:"desc",attributes:{"text":"<p>The object for which models should be created.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates for the given data the needed models. Be sure to have the classes\ncreated with {@link #toClass} before calling this method.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The created model object.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]}]}]}