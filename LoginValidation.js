function Validation(values) {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Email validation
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match";
    }

    // Password validation
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
       error.password = "Password didn't match";
    }

    return error;
}

export default Validation;
