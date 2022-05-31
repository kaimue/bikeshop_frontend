const SignUp = () => {
  return (
    <div>
      <form action="http://localhost:5000/user/login" method="post">
        <label for="email">email:</label>
        <br></br>
        <input type="text" id="email" name="email" placeholder="email" />
        <br></br>
        <label for="password">password:</label>
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
        />
        <br></br>
        <input type="submit" value="Submit" />
        <br></br>
        <label for="signUp">Already have an account? Login here.</label>
        <br></br>
      </form>
    </div>
  );
};

export default SignUp;
