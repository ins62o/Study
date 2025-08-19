{
  // Unions Types : OR

  type Direction = "left" | "right" | "up" | "down";

  function move(direction: Direction) {
    console.log(direction);
  }

  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function : login → success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // Quiz : 로그인을 하고나서 State 출력 → printLoginState(state)
  // success → 🔅 body
  // fail → 💥 reason

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`🔅`, state.response.body);
    } else {
      console.log(`💥`, state.reason);
    }
  }
}
