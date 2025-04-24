import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, User, Lock } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de autenticação
    if (email && password) {
      navigate("/");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ecf39e] to-[#90a955] px-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/90 backdrop-blur-md">
        <CardContent className="py-8">
          <div className="flex flex-col items-center gap-2 mb-6">
            <img src="/logo.svg" alt="Logo Satorium" className="h-14 mb-2" />
            <CardTitle className="text-2xl text-[#31572c] font-bold font-sans text-center">Bem-vindo ao Satorium</CardTitle>
            <p className="text-[#4f772d] text-center text-sm">solucoes de agricultura e monitoramento</p>
          </div>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <Label htmlFor="email" className="text-[#31572c]">Email</Label>
              <div className="relative mt-1">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#90a955]">
                  <User className="h-5 w-5" />
                </span>
                <Input
                  id="email"
                  type="text"
                  autoComplete="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-[#ecf39e]/60 border-[#90a955] focus:border-[#4f772d] text-[#132a13] font-medium"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="password" className="text-[#31572c]">Senha</Label>
              <div className="relative mt-1">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#90a955]">
                  <Lock className="h-5 w-5" />
                </span>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-[#ecf39e]/60 border-[#90a955] focus:border-[#4f772d] text-[#132a13] font-medium"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#31572c] hover:text-[#132a13] focus:outline-none"
                  aria-label={showPassword ? "Ocultar senha" : "Exibir senha"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="mt-2 w-full bg-[#4f772d] hover:bg-[#31572c] text-white text-lg rounded-lg py-3 shadow-lg transition"
              size="lg"
            >
              Entrar
            </Button>
          </form>
          <p className="mt-6 text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Satorium — solucoes de agricultura e monitoramento
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;