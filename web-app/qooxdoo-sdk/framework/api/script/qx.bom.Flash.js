{type:"class",attributes:{"isStatic":"true","name":"Flash","packageName":"qx.bom","fullName":"qx.bom.Flash","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Flash&#8482; embed via script</p>\n\n<p>Include:</p>\n\n<ul>\n<li>Simple movie embedding (returning a cross-browser working <span class=\"caps\">DOM</span> node)</li>\n<li>Support for custom parameters and attributes</li>\n<li>Support for Flash&#8482; variables</li>\n</ul>\n\n<p>Does not include the following features from SWFFix:</p>\n\n<ul>\n<li>Active content workarounds for already inserted movies (via markup)</li>\n<li>Express install support</li>\n<li>Transformation of standard conformance markup to cross browser support</li>\n<li>Support for alternative content (alt text)</li>\n</ul>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__createSwf"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element node where the Flash element node will be added.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"attributes"},children:[{type:"desc",attributes:{"text":"<p>Flash attribute data.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"name":"params"},children:[{type:"desc",attributes:{"text":"<p>Flash parameter data.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"name":"win"},children:[{type:"desc",attributes:{"text":"<p>Window to create the element for.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates a <span class=\"caps\">DOM</span> element with a flash movie.</p>"}}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__destroyObjectInIE"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>Flash object element to destroy.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Destroy the flash object and remove from <span class=\"caps\">DOM</span>, to fix memory leaks.</p>"}}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__fixOutOfMemoryError"},children:[{type:"desc",attributes:{"text":"<p>Internal helper to prevent leaks in IE</p>"}}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__getFlashObject"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The element to look.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Return the flash object element from <span class=\"caps\">DOM</span> node.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"create"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>Parent <span class=\"caps\">DOM</span> element node to add flash movie</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"attributes"},children:[{type:"desc",attributes:{"text":"<p>attributes for the object tag like id or mayscript</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"variables"},children:[{type:"desc",attributes:{"text":"<p>Flash variable data (these are available in the movie later)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"params"},children:[{type:"desc",attributes:{"text":"<p>Flash parameter data (these are used to configure the movie itself)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"win"},children:[{type:"desc",attributes:{"text":"<p>Window to create the element for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates an <span class=\"caps\">DOM</span> element</p>\n\n<p>The dimension of the movie should define through <span class=\"caps\">CSS</span> styles {@link qx.bom.element.Style}</p>\n\n<p>It is possible to add these parameters as supported by Flash movies:\n<a href=\"http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_12701\">http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_12701</a></p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The created Flash element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"destroy"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>Either the <span class=\"caps\">DOM</span> element that contains\n             the flash object or the flash object itself.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"win"},children:[{type:"desc",attributes:{"text":"<p>? {Window} Window that the element, which is to be destroyed,\n                   belongs to.</p>"}}]}]},{type:"desc",attributes:{"text":"<p>Destroys the flash object from <span class=\"caps\">DOM</span>, but not the parent <span class=\"caps\">DOM</span> element.</p>\n\n<p>Note: Removing the flash object like this:</p>\n\n<pre>\n var div = qx.bom.Element.create(\"div\");\n document.body.appendChild(div);\n\n var flashObject = qx.bom.Flash.create(div, { movie : \"Flash.swf\", id : \"id\" });\n div.removeChild(div.firstChild);\n</pre>\n\n<p>involve memory leaks in Internet Explorer.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}