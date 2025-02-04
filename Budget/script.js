// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budget-form');
    const entriesContainer = document.getElementById('budget-entries');
    const totalIncomeEl = document.getElementById('total-income');
    const totalExpenseEl = document.getElementById('total-expense');
    const balanceEl = document.getElementById('balance');
    let entries = JSON.parse(localStorage.getItem('budgetEntries')) || [];
    let filter = 'all';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const type = document.getElementById('type').value;
        const entry = { id: Date.now(), description, amount, type };

        entries.push(entry);
        updateEntries();
        form.reset();
    });

    const updateEntries = () => {
        entriesContainer.innerHTML = '';

        let totalIncome = 0;
        let totalExpense = 0;
        let ent_type = '';

        const filteredEntries = entries.filter(entry => filter === 'all' || entry.type === filter);        

        filteredEntries.forEach(entry => {
            const tr = document.createElement('tr');
            
            if(entry.type === 'income'){ent_type = "fa-up-long text-green-600";}else{ent_type = "fa-down-long text-red-600";}

            tr.innerHTML = `
                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div>
                        <h2 class="font-medium text-gray-800 text-center ">${entry.description}</h2>
                    </div>
                </td>
                <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <h2 class="font-medium text-gray-800 text-center ">${entry.amount}</h2>
                </td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                        <p class="text-gray-500 text-center">${entry.type} <i class="fa-solid ${ent_type}"></i></p>
                    </div>
                </td>
                <td class="px-4 py-4 text-sm whitespace-nowrap text-center">
                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onclick="editEntry(${entry.id})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onclick="deleteEntry(${entry.id})"><i class="fa-solid fa-trash-can"></i></button>
                </td>`;

            entriesContainer.appendChild(tr);

            if (entry.type === 'income') {
                totalIncome += entry.amount;
            } else {
                totalExpense += entry.amount;
            }
        });

        const balance = totalIncome - totalExpense;

        totalIncomeEl.textContent = totalIncome.toFixed(2);
        totalExpenseEl.textContent = totalExpense.toFixed(2);
        balanceEl.textContent = balance.toFixed(2);

        localStorage.setItem('budgetEntries', JSON.stringify(entries));
    }

    window.editEntry = (id) => {
        const entry = entries.find(entry => entry.id === id);
        document.getElementById('description').value = entry.description;
        document.getElementById('amount').value = entry.amount;
        document.getElementById('type').value = entry.type;
        deleteEntry(id);
    }

    window.deleteEntry = (id) => {
        entries = entries.filter(entry => entry.id !== id);
        updateEntries();
    }

    window.filterEntries = (type) => {
        filter = type;
        updateEntries();
    }

    // Load initial entries from local storage
    updateEntries();
});
