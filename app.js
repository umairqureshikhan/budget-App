document.getElementById("budgetForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const budgetInput = document.getElementById("budgetInput");
    const budget = parseInt(budgetInput.value);
    
    if (!isNaN(budget)) {
      Budgetremain = budget;
      
      const BudgetremainElement = document.getElementById("Budgetremain");
      BudgetremainElement.innerText = "Remaining Budget: $" + Budgetremain;
      
      budgetInput.value = "";
    }
  });
  
  document.getElementById("Expense").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const Inputdescription = document.getElementById("Inputdescription");
    const Inputamount = document.getElementById("Inputamount");
    const dateInput = document.getElementById("dateInput");
    
    const description = Inputdescription.value;
    const amount = parseInt(Inputamount.value);
    const date = dateInput.value;
    
    if (!isNaN(amount) && description && date) {
      if (amount <= Budgetremain) {
        Budgetremain -= amount;
        
        const BudgetremainElement = document.getElementById("Budgetremain");
        BudgetremainElement.innerText = "Remaining Budget: $" + Budgetremain;
        
        const table = document.getElementById("expenseTable");
        const row = table.insertRow();
        const descriptionCell = row.insertCell();
        const amountCell = row.insertCell();
        const dateCell = row.insertCell();
        
        descriptionCell.innerText = description;
        amountCell.innerText = amount;
        dateCell.innerText = date;
        
        Inputdescription.value = "";
        Inputamount.value = "";
        dateInput.value = "";
      } else {
        alert("you not have enough money");
      }
    }
  });
  