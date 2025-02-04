Create html page using tailwind css.

Explaining HTML.
	Use Fontawesome for icons.
	Use Tailwind CSS CDN for style.
	Use Poppins font from google.
	

Explaining Script.
	Declare const datatype for form,entriesContainer,totalIncomeEl,totalExpenseEl,balanceEl.
	Declare let datatype entries, all
	
	Create form addEventListener to get the value from the form.
		Declare const datatype for description,amount,type,entry.
		Push the entry to entries.
		call updateEntries.
	
	UpdateEntries function is used to declaare the values for totalIncome, totalExpense, ent_type.
		const filteredEntries is used to filter the selection values like all, income, expense.
		filteredEntries.forEach is used to display the values of entries.
		It will print each values in tables using inner html.]]
		if (entry.type === 'income') this is used to add income values and add expense values.
		localStorage.setItem('budgetEntries', JSON.stringify(entries)) - It is used to update the values in localStorage.
	
	Window.editEntry
		const entry = entries.find - It is used to find the entries by entry id.
		document.getElementById('description').value - It is used to get value for description.
		document.getElementById('amount').value - It is used to get value for value.
		document.getElementById('type').value - It is used to get value for type.
		Call the deleteEntry function by (id).
	
	Window.deleteEntry
		entries = entries.filter - It is used to filter the value by id.
		Again call the updateEntries function.
