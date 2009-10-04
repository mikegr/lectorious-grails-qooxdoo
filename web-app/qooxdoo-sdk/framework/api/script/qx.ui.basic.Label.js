{type:"class",attributes:{"name":"Label","interfaces":"qx.ui.form.IStringForm","superClass":"qx.ui.core.Widget","fullName":"qx.ui.basic.Label","type":"class","packageName":"qx.ui.basic"},children:[{type:"desc",attributes:{"text":"<p>The label class brings typical text content to the widget system.</p>\n\n<p>It supports simple text nodes and complex <span class=\"caps\">HTML</span> (rich). The default\ncontent mode is for text only. The mode is changeable through the property\n{@link #rich}.</p>\n\n<p>The label supports heightForWidth when used in <span class=\"caps\">HTML</span> mode. This means\nthat multi line <span class=\"caps\">HTML</span> automatically computes the correct preferred height.</p>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the widget.</p>\n\n<pre class=\"javascript\">\n  // a simple text label without wrapping and markup support\n  var label1 = new qx.ui.basic.Label(\"Simple text label\");\n  this.getRoot().add(label1, {left:20, top:10});\n\n  // a HTML label with automatic line wrapping\n  var label2 = new qx.ui.basic.Label().set({\n    value: \"A <b>long label</b> text with auto-wrapping. This also may contain <b>rich HTML</b> markup.\",\n    rich : true,\n    width: 120\n  });\n  this.getRoot().add(label2, {left:20, top:50});\n</pre>\n\n<p>The first label in this example is a basic text only label. As such no\nautomatic wrapping is supported. The second label is a long label containing\n<span class=\"caps\">HTML</span> markup with automatic line wrapping.</p>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/widget/Label\" target=\"_blank\">\nDocumentation of this widget in the qooxdoo wiki.</a>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Text or <span class=\"caps\">HTML</span> content to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeContent"},children:[{type:"desc",attributes:{"text":"<p>The old content change event. Please use the value property instead.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]},{type:"deprecated"}]},{type:"event",attributes:{"name":"changeRich"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #rich}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeTextAlign"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #textAlign}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"allowGrowX","docFrom":"qx.ui.core.LayoutItem","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"name":"allowGrowY","docFrom":"qx.ui.core.LayoutItem","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"name":"allowShrinkY","docFrom":"qx.ui.core.LayoutItem","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"label\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"buddy","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyBuddy","check":"qx.ui.core.Widget"},children:[{type:"desc",attributes:{"text":"<p>The buddy property can be used to connect the label to another widget.\nThat causes two things:\n<ul>\n  <li>The label will always take the same enabled state as the buddy\n      widget.\n  </li>\n  <li>A click on the label will focus the buddy widget.\n  </li>\n</ul>\nThis is the behavior of the for attribute of <span class=\"caps\">HTML</span>:\n<a href=\"http://www.w3.org/TR/html401/interact/forms.html#adef-for\">http://www.w3.org/TR/html401/interact/forms.html#adef-for</a></p>"}}]},{type:"property",attributes:{"name":"rich","defaultValue":"false","event":"changeRich","propertyType":"new","apply":"_applyRich","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Switches between rich <span class=\"caps\">HTML</span> and text content. The text mode (<code>false</code>) supports\nadvanced features like ellipsis when the available space is not\nenough. <span class=\"caps\">HTML</span> mode (<code>true</code>) supports multi-line content and all the\nmarkup features of <span class=\"caps\">HTML</span> content.</p>"}}]},{type:"property",attributes:{"name":"selectable","docFrom":"qx.ui.core.Widget","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"textAlign","propertyType":"new","allowNull":"true","apply":"_applyTextAlign","possibleValues":"\"left\",\"center\",\"right\"","event":"changeTextAlign","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>Control the text alignment</p>"}}]},{type:"property",attributes:{"name":"value","check":"String","allowNull":"true","propertyType":"new","apply":"_applyValue","event":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Contains the <span class=\"caps\">HTML</span> or text content. Interpretation depends on the value\nof {@link #rich}. In text mode entities and other <span class=\"caps\">HTML</span> special content\nis not supported. But it is possible to use unicode escape sequences\nto insert symbols and other non <span class=\"caps\">ASCII</span> characters.</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__computeContentSize"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"width"},children:[{type:"desc",attributes:{"text":"<p>Optional width constraint</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Internal utility to compute the content dimensions.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Label#buddy","name":"_applyBuddy"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>buddy</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBuddy}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#font","overriddenFrom":"qx.ui.core.Widget","name":"_applyFont"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Font"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Font"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>font</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFont}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Label#rich","name":"_applyRich"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>rich</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyRich}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#selectable","overriddenFrom":"qx.ui.core.Widget","name":"_applySelectable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>selectable</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySelectable}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Label#textAlign","name":"_applyTextAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextAlign}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#textColor","overriddenFrom":"qx.ui.core.Widget","name":"_applyTextColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Color"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Color"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextColor}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Label#value","name":"_applyValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyValue}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createContentElement"}},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_getContentHeightForWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"width"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_getContentHint"}},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.LayoutItem","overriddenFrom":"qx.ui.core.LayoutItem","name":"_hasHeightForWidth"}},{type:"method",attributes:{"access":"protected","name":"_onChangeLocale"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>the change event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Locale change event handler</p>"}}]},{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.core.Object","name":"addListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"listener"}},{type:"param",attributes:{"name":"self"}},{type:"param",attributes:{"name":"capture"}}]}]},{type:"method",attributes:{"name":"getBuddy","fromProperty":"buddy"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>buddy</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #buddy}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>buddy</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getContent"},children:[{type:"deprecated"},{type:"desc",attributes:{"text":"<p>Old get method for the content property. Please use the value\nproperty instead.</p>"}}]},{type:"method",attributes:{"name":"getRich","fromProperty":"rich"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>rich</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>rich</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTextAlign","fromProperty":"textAlign"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initBuddy","fromProperty":"buddy"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>buddy</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>buddy</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #buddy}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initRich","fromProperty":"rich"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>rich</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>rich</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTextAlign","fromProperty":"textAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>textAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isRich","fromProperty":"rich"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>rich</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetBuddy","fromProperty":"buddy"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>buddy</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #buddy}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetContent"},children:[{type:"deprecated"},{type:"desc",attributes:{"text":"<p>Old reset method for the content property. Please use the value\nproperty instead.</p>"}}]},{type:"method",attributes:{"name":"resetRich","fromProperty":"rich"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>rich</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTextAlign","fromProperty":"textAlign"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>textAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setBuddy","fromProperty":"buddy"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>buddy</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>buddy</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #buddy}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setContent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The value of the label.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"deprecated"},{type:"desc",attributes:{"text":"<p>Old set method for the content property. Please use the value\nproperty instead.</p>"}}]},{type:"method",attributes:{"name":"setRich","fromProperty":"rich"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>rich</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>rich</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTextAlign","fromProperty":"textAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleRich","fromProperty":"rich"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>rich</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}