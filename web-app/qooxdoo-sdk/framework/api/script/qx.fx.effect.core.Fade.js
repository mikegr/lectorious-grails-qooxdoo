{type:"class",attributes:{"name":"Fade","packageName":"qx.fx.effect.core","superClass":"qx.fx.Base","fullName":"qx.fx.effect.core.Fade","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Core effect &#8220;Fade&#8221;</p>\n\n<p>Fades in the specified element: it changes to opacity from a given value to\nanother. If target value is 0, it will hide the element, if value is 1, it\nwill show it using the &#8220;display&#8221; property.\nYou can toggle this behavior using the &#8220;modifyDisplay&#8221; property:\n{@link qx.fx.effect.core.Fade#modifyDisplay}.</p>"}},{type:"methods",children:[{type:"method",attributes:{"docFrom":"qx.fx.Base","overriddenFrom":"qx.fx.Base","name":"afterFinishInternal"}},{type:"method",attributes:{"docFrom":"qx.fx.Base","overriddenFrom":"qx.fx.Base","name":"beforeSetup"}},{type:"method",attributes:{"name":"getModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>modifyDisplay</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>modifyDisplay</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>modifyDisplay</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>modifyDisplay</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>modifyDisplay</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>modifyDisplay</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>modifyDisplay</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>modifyDisplay</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>modifyDisplay</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.fx.Base","overriddenFrom":"qx.fx.Base","name":"update"},children:[{type:"params",children:[{type:"param",attributes:{"name":"position"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"defaultValue":"1.0","propertyType":"new","overriddenFrom":"qx.fx.Base","name":"from","refine":"true"},children:[{type:"desc",attributes:{"text":"<p>Initial opacity value.</p>"}}]},{type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"modifyDisplay","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Flag indicating if the <span class=\"caps\">CSS</span> attribute &#8220;display&#8221;\nshould be modified by effect</p>"}}]},{type:"property",attributes:{"defaultValue":"0.0","propertyType":"new","overriddenFrom":"qx.fx.Base","name":"to","refine":"true"},children:[{type:"desc",attributes:{"text":"<p>Final opacity value.</p>"}}]}]}]}