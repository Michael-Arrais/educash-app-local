import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  
  // Mock data for the financial dashboard
  const financialData = {
    currentBalance: 1234.56,
    monthlyIncome: 800.00,
    monthlyExpenses: 650.00,
    savingsGoal: 2000.00,
    savingsProgress: 61.7,
    expensesByCategory: [
      { category: 'Alimentação', amount: 250 },
      { category: 'Transporte', amount: 120 },
      { category: 'Lazer', amount: 80 },
      { category: 'Educação', amount: 100 },
      { category: 'Outros', amount: 100 }
    ],
    monthlySpendingTrend: [
      { month: 'Jan', amount: 580 },
      { month: 'Fev', amount: 620 },
      { month: 'Mar', amount: 590 },
      { month: 'Abr', amount: 610 },
      { month: 'Mai', amount: 630 },
      { month: 'Jun', amount: 650 }
    ]
  };
  
  // Mock data for savings goals
  const savingsGoals = [
    { id: 1, name: 'Curso de Verão', target: 1500, saved: 900, deadline: '2023-12-31' },
    { id: 2, name: 'Material Escolar', target: 300, saved: 150, deadline: '2023-09-01' },
    { id: 3, name: 'Viagem de Formatura', target: 2000, saved: 600, deadline: '2024-03-31' }
  ];
  
  // Mock data for the quiz
  const quizQuestions = [
    {
      question: "Qual é o melhor momento para começar a poupar dinheiro?",
      options: ["Quando começar a trabalhar", "Na aposentadoria", "Agora mesmo", "Quando tiver uma emergência"],
      correctAnswer: "Agora mesmo",
      explanation: "Quanto mais cedo você começar a poupar, mais tempo seu dinheiro terá para crescer através dos juros compostos."
    },
    {
      question: "O que é juros compostos?",
      options: [
        "Taxa de juros cobrada por empréstimos",
        "Juros sobre juros acumulados ao longo do tempo",
        "Desconto em compras à vista",
        "Taxa fixa de retorno sobre investimentos"
      ],
      correctAnswer: "Juros sobre juros acumulados ao longo do tempo",
      explanation: "Juros compostos são juros calculados sobre o valor inicial e também sobre os juros acumulados de períodos anteriores."
    },
    {
      question: "Qual é a porcentagem ideal de renda que deve ser destinada à poupança?",
      options: ["10%", "25%", "50%", "Depende da situação financeira"],
      correctAnswer: "Depende da situação financeira",
      explanation: "Embora 10-20% seja uma boa meta para muitos, a porcentagem ideal de poupança varia conforme suas circunstâncias, necessidades e objetivos financeiros."
    }
  ];
  
  // Mock data for government programs
  const governmentPrograms = [
    {
      id: 1,
      name: "Bolsa Família",
      description: "Programa federal de transferência de renda condicionada à frequência escolar e vacinação das crianças.",
      eligibility: "Famílias em situação de pobreza ou extrema pobreza com crianças e adolescentes.",
      benefits: "Valores mensais variáveis de acordo com o número de filhos e a renda familiar.",
      link: "#"
    },
    {
      id: 2,
      name: "Pé-de-Meia",
      description: "Programa que incentiva jovens a estudar e poupar dinheiro para projetos futuros.",
      eligibility: "Jovens entre 15 e 29 anos matriculados em instituições de ensino públicas ou particulares comprovadamente carentes.",
      benefits: "Valores mensais depositados em conta vinculada ao cumprimento de metas educacionais.",
      link: "#"
    },
    {
      id: 3,
      name: "Auxílio Gás",
      description: "Benefício para ajudar famílias de baixa renda no pagamento do gás de cozinha.",
      eligibility: "Famílias inscritas no CadÚnico com renda mensal de até meio salário mínimo por pessoa.",
      benefits: "Pagamento bimestral equivalente a 50% do preço médio do botijão de gás.",
      link: "#"
    },
    {
      id: 4,
      name: "Benefício de Prestação Continuada (BPC)",
      description: "Benefício assistencial pago pela Previdência Social a pessoas com deficiência e idosos com 65 anos ou mais.",
      eligibility: "Pessoas com deficiência de qualquer idade ou idosos com 65 anos ou mais que comprovem não ter condições de prover sustento próprio.",
      benefits: "Valor equivalente a um salário mínimo mensal.",
      link: "#"
    }
  ];
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`py-4 px-6 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h1 className="text-xl font-bold">EDUCASH</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => setActiveTab('dashboard')} className={`transition-colors ${activeTab === 'dashboard' ? 'text-green-500' : 'hover:text-green-500'}`}>Dashboard</button>
            <button onClick={() => setActiveTab('pedeMeia')} className={`transition-colors ${activeTab === 'pedeMeia' ? 'text-green-500' : 'hover:text-green-500'}`}>Meu Pé-de-Meia</button>
            <button onClick={() => setActiveTab('aiAssistant')} className={`transition-colors ${activeTab === 'aiAssistant' ? 'text-green-500' : 'hover:text-green-500'}`}>Assistente de IA</button>
            <button onClick={() => setActiveTab('quiz')} className={`transition-colors ${activeTab === 'quiz' ? 'text-green-500' : 'hover:text-green-500'}`}>Quiz</button>
            <button onClick={() => setActiveTab('government')} className={`transition-colors ${activeTab === 'government' ? 'text-green-500' : 'hover:text-green-500'}`}>Programas do Governo</button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {darkMode ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M16 12C16 14.209 14.209 16 12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            
            <div className="hidden md:flex items-center space-x-2">
              <img src="https://picsum.photos/seed/user/40/40"  alt="Perfil" className="w-8 h-8 rounded-full" />
              <span className="font-medium">Usuário</span>
            </div>
          </div>
        </div>
        
        {/* Mobile menu toggle */}
        <div className="md:hidden mt-2 flex justify-end">
          <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Saldo Atual</h3>
                <p className="text-2xl font-bold text-green-500 mt-1">R$ {financialData.currentBalance.toFixed(2)}</p>
              </div>
              
              <div className={`p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Renda Mensal</h3>
                <p className="text-2xl font-bold text-blue-500 mt-1">R$ {financialData.monthlyIncome.toFixed(2)}</p>
              </div>
              
              <div className={`p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Despesas Mensais</h3>
                <p className="text-2xl font-bold text-red-500 mt-1">R$ {financialData.monthlyExpenses.toFixed(2)}</p>
              </div>
              
              <div className={`p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Meta de Poupança</h3>
                <p className="text-2xl font-bold text-yellow-500 mt-1">R$ {financialData.savingsGoal.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Spending Chart */}
              <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className="text-xl font-semibold mb-4">Gastos Mensais</h2>
                <div className="h-64">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    {/* This is a mock chart - in a real app we'd use Chart.js or Recharts */}
                    <g transform="translate(20, 10)">
                      {financialData.monthlySpendingTrend.map((item, index) => {
                        const x = index * 60;
                        const height = (item.amount / 700) * 180;
                        return (
                          <g key={index}>
                            <rect x={x} y={180 - height} width="40" height={height} fill="#48BB78" rx="4" ry="4" />
                            <text x={x + 20} y="195" textAnchor="middle" fontSize="10" fill={darkMode ? '#CBD5E0' : '#4A5568'}>{item.month}</text>
                            <text x={x + 20} y={180 - height - 5} textAnchor="middle" fontSize="10" fill="white">${item.amount}</text>
                          </g>
                        );
                      })}
                    </g>
                  </svg>
                </div>
              </div>
              
              {/* Expenses by Category Chart */}
              <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className="text-xl font-semibold mb-4">Despesas por Categoria</h2>
                <div className="h-64 flex items-end">
                  {/* This is a mock chart - in a real app we'd use Chart.js or Recharts */}
                  <div className="w-full flex justify-around">
                    {financialData.expensesByCategory.map((item, index) => {
                      const height = (item.amount / 300) * 100;
                      return (
                        <div key={index} className="flex flex-col items-center">
                          <div 
                            className="w-10 rounded-t bg-gradient-to-t from-blue-500 to-blue-400 transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                            style={{ height: `${height}%` }}
                          ></div>
                          <span className="mt-2 text-xs text-center">{item.category}</span>
                          <span className="text-sm font-medium">R$ {item.amount}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Progresso da Poupança</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Meta: R$ {financialData.savingsGoal.toFixed(2)}</span>
                  <span className="font-medium">{financialData.savingsProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-green-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${financialData.savingsProgress}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <h3 className="font-medium text-lg mb-2">Dica do Dia</h3>
                    <p className="text-sm">Comece a poupar pequenas quantias regularmente. Mesmo 5% da sua renda pode fazer diferença a longo prazo.</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <h3 className="font-medium text-lg mb-2">Seu Progresso</h3>
                    <p className="text-sm">Você está economizando R$ {(financialData.monthlyIncome - financialData.monthlyExpenses).toFixed(2)} por mês.</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <h3 className="font-medium text-lg mb-2">Próximo Nível</h3>
                    <p className="text-sm">Você alcançará sua meta em aproximadamente 4 meses se mantiver a mesma economia mensal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Meu Pé-de-Meia Tab */}
        {activeTab === 'pedeMeia' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Minhas Metas de Poupança</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {savingsGoals.map(goal => (
                  <div key={goal.id} className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className="font-medium text-lg mb-2">{goal.name}</h3>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>R$ {goal.saved} de R$ {goal.target}</span>
                        <span>{Math.round((goal.saved / goal.target) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(goal.saved / goal.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Prazo: {new Date(goal.deadline).toLocaleDateString('pt-BR')}</p>
                  </div>
                ))}
              </div>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h3 className="font-medium text-lg mb-3">Criar Nova Meta</h3>
                <form className="space-y-3">
                  <div>
                    <label htmlFor="goalName" className="block text-sm font-medium mb-1">Nome da Meta</label>
                    <input type="text" id="goalName" className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`} placeholder="Ex: Curso de Verão" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="goalAmount" className="block text-sm font-medium mb-1">Valor Necessário</label>
                      <input type="number" id="goalAmount" className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`} placeholder="0.00" />
                    </div>
                    
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium mb-1">Prazo</label>
                      <input type="date" id="deadline" className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`} />
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors">
                    Criar Meta
                  </button>
                </form>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Dicas para Poupar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h3 className="font-medium text-lg mb-2">Orçamento 50-30-20</h3>
                  <p className="text-sm">Divida sua renda em: 50% para necessidades, 30% para desejos e 20% para poupança e dívidas. É uma maneira simples de manter suas finanças equilibradas.</p>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h3 className="font-medium text-lg mb-2">Poupe Automático</h3>
                  <p className="text-sm">Configure transferências automáticas para sua conta de poupança logo após receber seu benefício. Isso ajuda a evitar que você gaste o dinheiro antes de poupar.</p>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h3 className="font-medium text-lg mb-2">Faça uma Lista de Compras</h3>
                  <p className="text-sm">Antes de sair para comprar, faça uma lista detalhada. Isso ajuda a evitar compras por impulso e controlar melhor seus gastos.</p>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h3 className="font-medium text-lg mb-2">Use o Dinheiro Extra</h3>
                  <p className="text-sm">Quando receber um extra, como bônus ou reembolso de imposto, considere depositar uma parte significativa diretamente na poupança.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* AI Assistant Tab */}
        {activeTab === 'aiAssistant' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Assistente de IA</h2>
              <div className="h-80 overflow-y-auto mb-4 p-4 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className={`p-3 rounded-lg max-w-md ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                      <p className="text-sm">Olá! Sou o seu Assistente Financeiro e estou aqui para ajudar você a entender melhor suas finanças e fazer escolhas inteligentes com seus benefícios públicos.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className={`p-3 rounded-lg max-w-md bg-green-500 text-white shadow`}>
                      <p className="text-sm">Como posso melhorar minha pontuação de crédito?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className={`p-3 rounded-lg max-w-md ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                      <p className="text-sm">Para melhorar sua pontuação de crédito, é importante pagar suas contas em dia, manter baixo o uso do limite de crédito, evitar abrir muitas contas novas em pouco tempo e manter contas antigas ativas.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="flex space-x-2">
                <input 
                  type="text" 
                  className={`flex-grow p-2 rounded border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`} 
                  placeholder="Digite sua pergunta..." 
                />
                <button 
                  type="submit" 
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Sobre o Assistente de IA</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Como funciona?</h3>
                  <p className="text-sm mb-4">Nosso assistente de IA foi treinado com informações sobre finanças pessoais e programas governamentais para oferecer orientação personalizada com base nas suas perguntas e histórico financeiro.</p>
                  <p className="text-sm">Ele pode ajudar você a entender seus direitos com relação a benefícios públicos, planejar melhor seu orçamento e oferecer conselhos sobre como melhorar sua situação financeira.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2">Privacidade e Segurança</h3>
                  <p className="text-sm mb-4">Sua privacidade é nossa prioridade. Todas as conversas com o assistente são criptografadas e armazenadas com segurança. Não compartilhamos seus dados com terceiros.</p>
                  <p className="text-sm">Você pode excluir seu histórico de conversas a qualquer momento nas configurações da sua conta.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Quiz de Educação Financeira</h2>
              
              <div className="space-y-6">
                {quizQuestions.map((question, qIndex) => (
                  <div key={qIndex} className="border-b pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
                    <h3 className="font-medium text-lg mb-3">{qIndex + 1}. {question.question}</h3>
                    
                    <div className="space-y-2">
                      {question.options.map((option, oIndex) => (
                        <div key={oIndex} className="p-3 rounded-lg border cursor-pointer hover:bg-green-50 dark:hover:bg-gray-700 transition-colors">
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name={`question-${qIndex}`} 
                              className="mr-2"
                            />
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-3">
                      <button className="text-sm text-green-500 hover:text-green-600">
                        Verificar Resposta
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded transition-colors">
                  Enviar Respostas
                </button>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Resultados do Quiz</h2>
              
              <div className="flex flex-col items-center justify-center py-8">
                <div className="text-6xl font-bold text-green-500 mb-2">80%</div>
                <p className="text-lg mb-6">Você tem um bom entendimento de finanças pessoais!</p>
                
                <div className="w-full max-w-md">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Acertos</span>
                    <span className="text-sm">3 de 4</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-green-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Continue estudando para melhorar ainda mais seus conhecimentos financeiros.
                  </p>
                  <button className="text-sm text-green-500 hover:text-green-600">
                    Ver dicas para melhorar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Government Programs Tab */}
        {activeTab === 'government' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Programas do Governo</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {governmentPrograms.map(program => (
                  <div key={program.id} className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} shadow-sm`}>
                    <h3 className="font-medium text-lg mb-2">{program.name}</h3>
                    <p className="text-sm mb-3">{program.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-1">Elegibilidade:</h4>
                      <p className="text-xs">{program.eligibility}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-1">Benefícios:</h4>
                      <p className="text-xs">{program.benefits}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <button className="text-sm text-green-500 hover:text-green-600">Simular elegibilidade</button>
                      <a href={program.link} className="text-sm text-blue-500 hover:text-blue-600">Mais informações</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Vídeos Explicativos</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="relative pb-[56.25%] h-0 mb-3">
                    <iframe 
                      className="absolute inset-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"  
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-medium text-lg mb-1">Como funciona o Bolsa Família</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Entenda os requisitos e benefícios do programa Bolsa Família.</p>
                </div>
                
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="relative pb-[56.25%] h-0 mb-3">
                    <iframe 
                      className="absolute inset-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"  
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="font-medium text-lg mb-1">Como usar o benefício do Auxílio Gás</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Descubra como o benefício do Auxílio Gás pode ajudar sua família.</p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Simulador de Benefícios</h2>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
                <h3 className="font-medium text-lg mb-3">Simule sua elegibilidade para programas governamentais</h3>
                
                <form className="space-y-3">
                  <div>
                    <label htmlFor="familyIncome" className="block text-sm font-medium mb-1">Renda familiar mensal</label>
                    <input type="text" id="familyIncome" className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`} placeholder="R$ 0,00" />
                  </div>
                  
                  <div>
                    <label htmlFor="familyMembers" className="block text-sm font-medium mb-1">Número de membros na família</label>
                    <input type="number" id="familyMembers" className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`} min="1" />
                  </div>
                  
                  <div>
                    <label htmlFor="childrenUnder18" className="block text-sm font-medium mb-1">Crianças menores de 18 anos</label>
                    <input type="number" id="childrenUnder18" className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'}`} min="0" />
                  </div>
                  
                  <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors">
                    Simular Elegibilidade
                  </button>
                </form>
              </div>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h3 className="font-medium text-lg mb-2">Resultados da Simulação</h3>
                <p className="text-sm mb-3">Com base nas informações fornecidas, você pode ser elegível para os seguintes programas:</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Bolsa Família
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Auxílio Gás
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Pé-de-Meia
                  </li>
                </ul>
                
                <p className="text-sm mt-3 text-gray-500 dark:text-gray-400">
                  Estes resultados são simulados e não garantem a aprovação nos programas. Consulte o site oficial para mais informações.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Mobile navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around">
          <button onClick={() => setActiveTab('dashboard')} className={`py-3 flex flex-col items-center ${activeTab === 'dashboard' ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}`}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.4142 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs mt-1">Dashboard</span>
          </button>
          
          <button onClick={() => setActiveTab('pedeMeia')} className={`py-3 flex flex-col items-center ${activeTab === 'pedeMeia' ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}`}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="text-xs mt-1">Pé-de-Meia</span>
          </button>
          
          <button onClick={() => setActiveTab('aiAssistant')} className={`py-3 flex flex-col items-center ${activeTab === 'aiAssistant' ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}`}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10H8.01M12 10H12.01M16 10H16.01M18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4.58579 19.4142C4.96086 19.0391 5.46957 19 6 19V5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 7H8.01M12 7H12.01M16 7H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs mt-1">IA</span>
          </button>
          
          <button onClick={() => setActiveTab('quiz')} className={`py-3 flex flex-col items-center ${activeTab === 'quiz' ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}`}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H12.01M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs mt-1">Quiz</span>
          </button>
          
          <button onClick={() => setActiveTab('government')} className={`py-3 flex flex-col items-center ${activeTab === 'government' ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}`}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M9 8H15M9 12H15M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs mt-1">Programas</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;