{type:"class",attributes:{"isStatic":"true","name":"Class","packageName":"qx.bom.element","fullName":"qx.bom.element.Class","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">CSS</span> class name support for <span class=\"caps\">HTML</span> elements. Supports multiple class names\nfor each element. Can query and apply class names to <span class=\"caps\">HTML</span> elements.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The element to modify</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>The class name to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds a className to the given element\nIf successfully added the given className will be returned</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The added classname (if so)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"get"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The element to query</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Gets the classname of the given element</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The retrieved classname</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"has"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> element to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>The class name to check for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given element has the given className.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true when the element has the given classname</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> element to modify</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>The class name to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes a className from the given element</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The removed class name</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"replace"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> element to modify</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"oldName"},children:[{type:"desc",attributes:{"text":"<p>The class name to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"newName"},children:[{type:"desc",attributes:{"text":"<p>The class name to add</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Replaces the first given class name with the second one</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The added class name</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"toggle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> element to modify</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>The class name to toggle</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"toggle"},children:[{type:"desc",attributes:{"text":"<p>Whether to switch class on/off. Without\n   the parameter an automatic toggling would happen.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Toggles a className of the given element</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The class name</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]}