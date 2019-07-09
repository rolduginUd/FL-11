let userEmail = prompt('Enter your email: ');
let emailLength = 6;
let passwodLength = 5;

if(!userEmail){
    alert('Canceled.');
} else if(userEmail.length < emailLength){
    alert('I don`t know any emails having name length less than 6 symbols');
} else if(userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com'){
    let password = prompt('Please, enter your passwod: ');

    if(userEmail === 'user@gmail.com' && password === 'UserPass' ||
     userEmail === 'admin@gmail.com' && password === 'AdminPass'){
        let changeEmail = confirm('Do you want to change your password?');
        if(changeEmail === true){
            let oldPass = prompt('Please, write your old password: ');
    
            if(!oldPass){
                alert('Canceled.');
            }
    
            if(oldPass === password){
                let newPass = prompt('Please, enter new password: ');
    
                if(newPass.length < passwodLength){
                    alert('It`s too short password. Sorry.')
                } else{
                    let newPassConfirm = prompt('Please, confirm your new password: ');
    
                    if(newPassConfirm === newPass){
                        alert('You have successfully changed your password.')
                    } else{
                        alert('You wrote the wrong password.');
                    }
                }
            } else{
                alert('You wrote the wrong password.');
            }
        } else{
            alert('You have failed the change.');
        }
    } else{
        alert('Wrong password');
    }
} else{
    alert('I don’t know you');
}