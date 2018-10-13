function submit(mouseEvent) {

        const user = document.getElementById("usr").value,
            password = document.getElementById("pwd").value,
            id = document.getElementById("idl").value;

        const isBadUser = user != "escuelatelecom" ||
            password != "telecom123";

        showSuccess(false);
        showError(false);
        showBadUser(isBadUser);

        if (isBadUser) {
            return;
        }

        const data = {
            //"user": user,
            //"password": password,
            "key": "123BOOKQR",
            "status": 0 // Available
        };

        let url = `https://cors-anywhere.herokuapp.com/http://138.197.0.175:8055/books/${id}`;

        fetch(url, {
                method: "PUT",
                headers: {
                    "Origin": "null",
                },
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            })
            .then(response => response.json())
            .then(value => {
                success = value.code == 200
                showSuccess(success);
                showError(!success);
            }); // parses response to JSON

    }

    function showError(show) {
        if (show) {
            document.getElementById("Error").style.display = "block";
        } else {
            document.getElementById("Error").style.display = "none";
        }
    }

    function showSuccess(show) {
        if (show) {
            document.getElementById("Success").style.display = "block";
        } else {
            document.getElementById("Success").style.display = "none";
        }
    }

    function showBadUser(show) {
        if (show) {
            document.getElementById("BadUser").style.display = "block";
        } else {
            document.getElementById("BadUser").style.display = "none";
        }
    }