{type:"class",attributes:{"name":"Model","packageName":"qx.ui.table.selection","superClass":"qx.core.Object","fullName":"qx.ui.table.selection.Model","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A selection model.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"}}]},{type:"events",children:[{type:"event",attributes:{"name":"changeSelection"},children:[{type:"desc",attributes:{"text":"<p>Fired when the selection has changed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"Number","name":"MULTIPLE_INTERVAL_SELECTION","value":"4"},children:[{type:"desc",attributes:{"text":"<p>(int) The selection mode &#8220;multiple interval&#8221;. This mode only allows any\nselection.</p>"}}]},{type:"constant",attributes:{"type":"Number","name":"SINGLE_INTERVAL_SELECTION","value":"3"},children:[{type:"desc",attributes:{"text":"<p>(int) The selection mode &#8220;single interval&#8221;. This mode only allows one\ncontinuous interval of selected items.</p>"}}]},{type:"constant",attributes:{"type":"Number","name":"SINGLE_SELECTION","value":"2"},children:[{type:"desc",attributes:{"text":"<p>The selection mode &#8220;single&#8221;. This mode only allows one selected item.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"constant",attributes:{"type":"Number","name":"MULTIPLE_INTERVAL_SELECTION_TOGGLE","value":"5"},children:[{type:"desc",attributes:{"text":"<p>(int) The selection mode &#8220;multiple interval&#8221;. This mode only allows any\nselection.  The difference with the previous one, is that multiple selection is eased.\nA click on an item, toggles its selection state.  On the other hand, MULTIPLE_INTERVAL_SELECTION\ndoes this behavior only when Ctrl-clicking an item.</p>"}}]},{type:"constant",attributes:{"type":"Number","name":"NO_SELECTION","value":"1"},children:[{type:"desc",attributes:{"text":"<p>The selection mode &#8220;none&#8221;. Nothing can ever be selected.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_addSelectionInterval"},children:[{type:"params",children:[{type:"param",attributes:{"name":"fromIndex"},children:[{type:"desc",attributes:{"text":"<p>the first index of the selection (including).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"toIndex"},children:[{type:"desc",attributes:{"text":"<p>the last index of the selection (including).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds a selection interval to the current selection, but doesn&#8217;t inform\nthe listeners.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.table.selection.Model#selectionMode","name":"_applySelectionMode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"selectionMode"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>selectionMode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applySelectionMode}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_clearSelection"},children:[{type:"desc",attributes:{"text":"<p>Clears the selection, but doesn&#8217;t inform the listeners.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_dumpRanges"},children:[{type:"desc",attributes:{"text":"<p>Logs the current ranges for debug perposes.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_fireChangeSelection"},children:[{type:"desc",attributes:{"text":"<p>Fires the &#8220;changeSelection&#8221; event to all registered listeners. If the selection model\ncurrently is in batch mode, only one event will be thrown when batch mode is ended.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_getSelectedRangeArr"},children:[{type:"desc",attributes:{"text":"<p>Returns an array that holds all the selected ranges of the table. Each\nentry is a map holding information about the &#8220;minIndex&#8221; and &#8220;maxIndex&#8221; of the\nselection range.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>array with all the selected ranges.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_setAnchorSelectionIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>the index to set.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the anchor selection index. Only use this function, if you want manipulate\nthe selection manually.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_setLeadSelectionIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>the index to set.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the lead selection index. Only use this function, if you want manipulate\nthe selection manually.</p>"}}]},{type:"method",attributes:{"name":"addSelectionInterval"},children:[{type:"params",children:[{type:"param",attributes:{"name":"fromIndex"},children:[{type:"desc",attributes:{"text":"<p>the first index of the selection (including).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"toIndex"},children:[{type:"desc",attributes:{"text":"<p>the last index of the selection (including).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds a selection interval to the current selection.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"clearSelection"},children:[{type:"desc",attributes:{"text":"<p>Clears the selection.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getAnchorSelectionIndex"},children:[{type:"desc",attributes:{"text":"<p>Returns the first argument of the last call to {@link #setSelectionInterval()},\n{@link #addSelectionInterval()} or {@link #removeSelectionInterval()}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the anchor selection index.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getLeadSelectionIndex"},children:[{type:"desc",attributes:{"text":"<p>Returns the second argument of the last call to {@link #setSelectionInterval()},\n{@link #addSelectionInterval()} or {@link #removeSelectionInterval()}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the lead selection index.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getSelectedCount"},children:[{type:"desc",attributes:{"text":"<p>Returns the number of selected items.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the number of selected items.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getSelectedRanges"},children:[{type:"desc",attributes:{"text":"<p>Returns the selected ranges as an array. Each array element has a\n<code>minIndex</code> and a <code>maxIndex</code> property.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the selected ranges.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getSelectionMode","fromProperty":"selectionMode"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selectionMode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionMode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>selectionMode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"hasBatchMode"},children:[{type:"desc",attributes:{"text":"<p>Returns whether batch mode is active. See setter for a description of batch mode.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true if batch mode is active, false otherwise</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSelectionMode","fromProperty":"selectionMode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>selectionMode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selectionMode</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionMode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isSelectedIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>the index to check.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns whether a index is selected.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the index is selected.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isSelectionEmpty"},children:[{type:"desc",attributes:{"text":"<p>Returns whether the selection is empty.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the selection is empty.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"iterateSelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"iterator"},children:[{type:"desc",attributes:{"text":"<p>the function to call for each selected index.\n         Gets the current index as parameter.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"object"},children:[{type:"desc",attributes:{"text":"<p>the object to use when calling the handler.\n         (this object will be available via &#8220;this&#8221; in the iterator)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls a iterator function for each selected index.</p>\n\n<p>Usage Example:</p>\n\n<pre class=\"javascript\">\nvar selectedRowData = [];\nmySelectionModel.iterateSelection(function(index) {\n  selectedRowData.push(myTableModel.getRowData(index));\n});\n</pre>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"removeSelectionInterval"},children:[{type:"params",children:[{type:"param",attributes:{"name":"fromIndex"},children:[{type:"desc",attributes:{"text":"<p>the first index of the interval (including).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"toIndex"},children:[{type:"desc",attributes:{"text":"<p>the last index of the interval (including).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes a interval from the current selection.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSelectionMode","fromProperty":"selectionMode"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selectionMode</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionMode}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setBatchMode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"batchMode"},children:[{type:"desc",attributes:{"text":"<p>true to activate batch mode, false to deactivate</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Activates / Deactivates batch mode. In batch mode, no change events will be thrown but\nwill be collected instead. When batch mode is turned off again and any events have\nbeen collected, one event is thrown to inform the listeners.</p>\n\n<p>This method supports nested calling, i. e. batch mode can be turned more than once.\nIn this case, batch mode will not end until it has been turned off once for each\nturning on.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true if batch mode is active, false otherwise</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"setSelectionInterval"},children:[{type:"params",children:[{type:"param",attributes:{"name":"fromIndex"},children:[{type:"desc",attributes:{"text":"<p>the first index of the selection (including).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"toIndex"},children:[{type:"desc",attributes:{"text":"<p>the last index of the selection (including).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the selected interval. This will clear the former selection.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setSelectionMode","fromProperty":"selectionMode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>selectionMode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selectionMode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selectionMode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"apply":"_applySelectionMode","defaultValue":"2","propertyType":"new","name":"selectionMode","possibleValues":"1,2,3,4,5"},children:[{type:"desc",attributes:{"text":"<p>Set the selection mode. Valid values are {@link #NO_SELECTION},\n{@link #SINGLE_SELECTION}, {@link #SINGLE_INTERVAL_SELECTION},\n{@link #MULTIPLE_INTERVAL_SELECTION} and\n{@link #MULTIPLE_INTERVAL_SELECTION_TOGGLE}.</p>"}}]}]}]}