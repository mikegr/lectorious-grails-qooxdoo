{type:"class",attributes:{"name":"IWindowManager","packageName":"qx.ui.window","implementations":"qx.ui.window.Manager","fullName":"qx.ui.window.IWindowManager","type":"interface"},children:[{type:"desc",attributes:{"text":"<p>Required interface for all window manager.</p>\n\n<p>Window manager handle the z-order and modality blocking of windows managed\nby the connected desktop {@link IDesktop}.</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"bringToFront"},children:[{type:"params",children:[{type:"param",attributes:{"name":"win"},children:[{type:"desc",attributes:{"text":"<p>window to bring to front</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]}]},{type:"desc",attributes:{"text":"<p>Ask the manager to bring a window to the front.</p>"}}]},{type:"method",attributes:{"name":"changeActiveWindow"},children:[{type:"params",children:[{type:"param",attributes:{"name":"active"},children:[{type:"desc",attributes:{"text":"<p>new active window</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]},{type:"param",attributes:{"name":"oldActive"},children:[{type:"desc",attributes:{"text":"<p>old active window</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]}]},{type:"desc",attributes:{"text":"<p>Inform the window manager about a new active window</p>"}}]},{type:"method",attributes:{"name":"sendToBack"},children:[{type:"params",children:[{type:"param",attributes:{"name":"win"},children:[{type:"desc",attributes:{"text":"<p>window to sent to back</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]}]},{type:"desc",attributes:{"text":"<p>Ask the manager to send a window to the back.</p>"}}]},{type:"method",attributes:{"name":"setDesktop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"desktop"},children:[{type:"desc",attributes:{"text":"<p>The connected desktop</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"IDesktop"}}]}]}]},{type:"desc",attributes:{"text":"<p>Connect the window manager to the window desktop</p>"}}]},{type:"method",attributes:{"name":"updateStack"},children:[{type:"desc",attributes:{"text":"<p>Update the window order and modality blocker</p>"}}]}]}]}