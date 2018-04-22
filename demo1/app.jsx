function fullName(res){
  return res.firstName  + ' ' + res.lastName;
}

const user = {
  firstName:"hu",
  lastName:"yanrong"
}

ReactDOM.render(
  <div>
    <p >hello world</p>
    <p>{fullName(user)} </p>
  </div>,
  document.getElementById('root')
);