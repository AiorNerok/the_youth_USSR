import { Assistant } from "components";
import { useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AsterikIcon, PasswordIcon, PasswordShowIcon } from "shared/icon";

type Inputs = {
  username: string;
  password: string;
};

export const Login = () => {
  let navigate = useNavigate();
  const [showPass, setShowPass] = useState<boolean>(true);

  const AssistantCallBack = useMemo(() => <Assistant />, []);

  const togglePass = () => setShowPass(!showPass);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let { username, password } = data;

    if (username === "hr" && password === "hr") {
      localStorage.setItem("user", username);
      navigate("/", { replace: true });
    } else if (username === "new" && password === "new") {
      localStorage.setItem("user", username);
      navigate("/", { replace: true });
    } else {
      setError("username", {
        type: "custom",
        message: "Error username",
      });
      setError("password", {
        type: "custom",
        message: "Error password",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-uiColor-white space-y-[33px] flex flex-col w-[470px] items-center pt-12 pb-5 rounded-[20px]"
      >
        {AssistantCallBack}
        <label className="w-full px-5">
          <b className="flex font-regular text-3">
            Введите логин <AsterikIcon />
          </b>
          <input
            className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[21px] outline-none bg-transparent focus:border-[#339AF0]"
            {...register("username", { required: true })}
            placeholder="Введите логин"
            style={{
              borderColor: errors.username ? "#F03E3E" : "",
            }}
          />
        </label>

        <div className="w-full px-5 relative">
          <label>
            <b className="flex font-regular text-3">
              Введите пароль <AsterikIcon />
            </b>

            <div className="relative">
              <input
                className="w-full border border-uiColor-gray-2 rounded-2xl text-3 font-light p-[21px] outline-none bg-transparent focus:border-[#339AF0]"
                placeholder="Введите пароль"
                {...register("password", { required: true })}
                style={{
                  borderColor: errors.password ? "#F03E3E" : "",
                }}
                type={showPass ? "password" : "text"}
              />
            </div>
          </label>
          <span onClick={togglePass} className="absolute right-9 top-[40px]">
            {showPass ? <PasswordIcon /> : <PasswordShowIcon />}
          </span>
        </div>

        <button className="outline-none bg-uiColor-violet-1 text-4 font-light px-[50px] py-[10px] rounded-xl">
          Войти
        </button>
      </form>
    </div>
  );
};
