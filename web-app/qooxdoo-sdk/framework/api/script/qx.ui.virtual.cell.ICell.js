{type:"class",attributes:{"name":"ICell","packageName":"qx.ui.virtual.cell","implementations":"qx.ui.virtual.cell.Abstract","fullName":"qx.ui.virtual.cell.ICell","type":"interface"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>A <span class=\"caps\">HTML</span> cell provider provides the {@link qx.ui.virtual.layer.HtmlCell}\nwith <span class=\"caps\">HTML</span> fragments to render the cells.</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"getCellProperties"},children:[{type:"params",children:[{type:"param",attributes:{"name":"data"},children:[{type:"desc",attributes:{"text":"<p>Data needed for the cell to render.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Var"}}]}]},{type:"param",attributes:{"name":"states"},children:[{type:"desc",attributes:{"text":"<p>The states set on the cell (e.g. <i>selected</i>,\n<i>focused</i>, <i>editable</i>).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns all relevant properties of the cell:\n<ul>\n<li>classes (String): Space separated class names</li>\n<li>style (String): <span class=\"caps\">CSS</span> styles</li>\n<li>attributes (String): Space separated attributes</li>\n<li>content (String): <span class=\"caps\">HTML</span> fragment of the innerHTML of the cell</li>\n<li>insets (Array): insets (padding + border) of the cell as\ntwo-dimensional array.</li>\n</ul></p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Cell properties (see above.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]}]}]}