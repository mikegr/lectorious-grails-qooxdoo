{type:"class",attributes:{"name":"Range","interfaces":"qx.util.range.IRange","superClass":"qx.core.Object","fullName":"qx.util.range.Range","type":"class","packageName":"qx.util.range"},children:[{type:"desc",attributes:{"text":"<p>This manager is used by all objects which needs ranges like qx.ui.form.Spinner, ...</p>"}},{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>This range implementation is expected to be replaced by an  \n  advanced solution in a future release.</p>"}}]},{type:"events",children:[{type:"event",attributes:{"name":"change"},children:[{type:"desc",attributes:{"text":"<p>Dispatched if the current value, the minimum value of the mximum value\nchanges.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"name":"change"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #max}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"change"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #precision}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"change"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"change"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #min}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.util.range.Range#max","name":"_applyMax"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the current value to the maximum value, if current value is not in\nrange with the new maximum value.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.util.range.Range#min","name":"_applyMin"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the current value to the minimum value, if current value is not in\nrange with the new minimum value.</p>"}}]},{type:"method",attributes:{"name":"getMax","fromProperty":"max"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>max</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #max}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>max</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMin","fromProperty":"min"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>min</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #min}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>min</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getPrecision","fromProperty":"precision"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>precision</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #precision}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>precision</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMax","fromProperty":"max"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>max</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>max</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #max}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMin","fromProperty":"min"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>min</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>min</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #min}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initPrecision","fromProperty":"precision"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>precision</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>precision</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #precision}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>wrap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>wrap</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.util.range.IRange","name":"limit"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"}}]}]},{type:"method",attributes:{"name":"resetMax","fromProperty":"max"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>max</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #max}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMin","fromProperty":"min"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>min</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #min}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetPrecision","fromProperty":"precision"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>precision</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #precision}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>wrap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMax","fromProperty":"max"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>max</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>max</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #max}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setMin","fromProperty":"min"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>min</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>min</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #min}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setPrecision","fromProperty":"precision"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>precision</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>precision</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #precision}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"max","defaultValue":"100","event":"change","propertyType":"new","apply":"_applyMax","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>maximal value of the Range object</p>"}}]},{type:"property",attributes:{"name":"min","defaultValue":"0","event":"change","propertyType":"new","apply":"_applyMin","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>minimal value of the Range object</p>"}}]},{type:"property",attributes:{"name":"precision","defaultValue":"0","event":"change","allowNull":"true","propertyType":"new","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>maximum fraction digits</p>"}}]},{type:"property",attributes:{"name":"value","defaultValue":"0","event":"change","allowNull":"true","propertyType":"new","check":"!isNaN(value)&&value>=this.getMin()&&value<=this.getMax()"},children:[{type:"desc",attributes:{"text":"<p>current value of the Range object</p>"}}]},{type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"wrap","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>whether the value should wrap around</p>"}}]}]}]}