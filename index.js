var operator = "";
        var FirstNumber = "";
        var secondNumber = "";
        var colors = ["#f1c40f", "#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12", "#1abc9c", "#e67e22", "#ecf0f1", "#95a5a6"];

        function append(number) {
            if (operator === "") {
                FirstNumber += number;
                document.getElementById('result').value = FirstNumber;
            } else {
                secondNumber += number;
                document.getElementById('result').value = FirstNumber + " " + operator + " " + secondNumber;
            }
            changeButtonColor(event.target); 
        }

        function setoperator(op) {
            if (FirstNumber !== "") {
                operator = op;
                document.getElementById('result').value = FirstNumber + " " + operator;
            }
            changeButtonColor(event.target); 
        }

        function showresult() {
            let res = 0;
            if (operator && FirstNumber && secondNumber) {
                switch (operator) {
                    case '+':
                        res = parseInt(FirstNumber) + parseInt(secondNumber);
                        break;
                    case '-':
                        res = parseInt(FirstNumber) - parseInt(secondNumber);
                        break;
                    case '*':
                        res = parseInt(FirstNumber) * parseInt(secondNumber);
                        break;
                    case '/':
                        if (parseInt(secondNumber) === 0) {
                            alert("Cannot divide by zero");
                            return;
                        }
                        res = parseInt(FirstNumber) / parseInt(secondNumber);
                        break;
                }
                document.getElementById('result').value = res;
                FirstNumber = res.toString();
                operator = "";
                secondNumber = "";
            } else {
                alert("Please complete the equation.");
            }
            changeButtonColor(event.target); 
        }

        function reset() {
            FirstNumber = "";
            secondNumber = "";
            operator = "";
            document.getElementById('result').value = "";
            changeButtonColor(event.target);
        }

        function changeButtonColor(button) {
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            var originalColor = button.style.backgroundColor;
            button.style.backgroundColor = randomColor;
            setTimeout(function () {
                button.style.backgroundColor = originalColor;
            }, 200);
        }