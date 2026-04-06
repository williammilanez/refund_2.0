import { useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/input";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(name, email, password, passwordConfirm);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Seu nome"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />

      <Input
        required
        legend="Confirmação da Senha"
        type="password"
        placeholder="123456"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPasswordConfirm(e.target.value)
        }
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
