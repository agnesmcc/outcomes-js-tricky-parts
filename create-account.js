function createAccount(savedPin, amount) {
    let balance = amount || 0;

    function checkBalance(pin) {
        if (pin === savedPin) {
            return `$${balance}`;
        } else {
            return "Invalid PIN.";
        }
    }

    function deposit(pin, deposit) {
        if (pin === savedPin) {
            balance += deposit;
            return `Succesfully deposited $${deposit}. Current balance: $${balance}.`;
        } else {
            return "Invalid PIN.";
        }
    }

    function withdraw(pin, withdrawl) {
        if (pin === savedPin) {
            if (withdrawl > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            } else if (withdrawl > 0) {
                balance -= withdrawl;
                return `Succesfully withdrew $${withdrawl}. Current balance: $${balance}.`;
            } else {
                return "Withdrawal amount must be greater than zero.";
            }
        } else {
            return "Invalid PIN.";
        }
    }

    function changePin(oldPin, newPin) {
        if (oldPin === savedPin) {
            savedPin = newPin;
            return "PIN successfully changed!";
        } else {
            return "Invalid PIN.";
        }
    }

    return {
        checkBalance,
        deposit,
        withdraw,
        changePin
    }
}

module.exports = { createAccount };
