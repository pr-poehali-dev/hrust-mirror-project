import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleLogin = () => {
    window.open('https://hrust.casino/', '_blank');
  };

  const games = [
    { id: 1, name: "Book of Ra", category: "Слоты", image: "/img/1f86f341-346e-483f-8601-5ca1e7274078.jpg" },
    { id: 2, name: "Crazy Monkey", category: "Слоты", image: "/img/1f86f341-346e-483f-8601-5ca1e7274078.jpg" },
    { id: 3, name: "Sizzling Hot", category: "Слоты", image: "/img/1f86f341-346e-483f-8601-5ca1e7274078.jpg" },
    { id: 4, name: "Fruit Cocktail", category: "Слоты", image: "/img/1f86f341-346e-483f-8601-5ca1e7274078.jpg" },
    { id: 5, name: "Garage", category: "Слоты", image: "/img/1f86f341-346e-483f-8601-5ca1e7274078.jpg" },
    { id: 6, name: "Resident", category: "Слоты", image: "/img/1f86f341-346e-483f-8601-5ca1e7274078.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-red-900">
      <header className="bg-black/50 backdrop-blur-sm border-b border-red-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/img/5276434b-ef2c-4a84-aef4-10832a14359f.jpg" 
              alt="HRUST Casino" 
              className="h-12 w-auto"
            />
            <h1 className="text-2xl font-bold text-red-500 tracking-wider">HRUST</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#games" className="text-white hover:text-red-400 transition-colors">Игры</a>
            <a href="#bonuses" className="text-white hover:text-red-400 transition-colors">Бонусы</a>
            <a href="#support" className="text-white hover:text-red-400 transition-colors">Поддержка</a>
          </nav>

          <Button 
            onClick={handleLogin}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Войти
          </Button>
        </div>
      </header>

      <main>
        <section className="relative py-20 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 blur-3xl"></div>
          <div className="relative container mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Официальное зеркало
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
                HRUST CASINO
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Лучшие игровые автоматы и честная игра. Быстрые выплаты и круглосуточная поддержка.
            </p>
            <Button 
              onClick={handleLogin}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Начать играть
            </Button>
          </div>
        </section>

        <section id="bonuses" className="py-16 px-4 bg-black/30">
          <div className="container mx-auto text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/30 to-yellow-900/30 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Icon name="Gift" size={48} className="text-yellow-400 mr-4" />
                  <h3 className="text-3xl font-bold text-white">Эксклюзивные бонусы</h3>
                </div>
                
                <p className="text-xl text-gray-200 mb-8">
                  Бонусы от 100 рублей за привязку ВК и Telegram
                </p>
                
                <div className="flex justify-center space-x-6 mb-8">
                  <a 
                    href="https://vk.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Icon name="MessageCircle" size={24} className="mr-2" />
                    ВКонтакте
                  </a>
                  <a 
                    href="https://t.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Icon name="Send" size={24} className="mr-2" />
                    Telegram
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-black/30 p-4 rounded-lg border border-yellow-500/30">
                    <Icon name="Star" size={32} className="text-yellow-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white mb-2">Приветственный бонус</h4>
                    <p className="text-gray-300">До 50,000₽ + 200 фриспинов</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-red-500/30">
                    <Icon name="Zap" size={32} className="text-red-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white mb-2">Кешбэк</h4>
                    <p className="text-gray-300">До 15% еженедельно</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg border border-green-500/30">
                    <Icon name="Trophy" size={32} className="text-green-400 mx-auto mb-2" />
                    <h4 className="text-lg font-semibold text-white mb-2">VIP программа</h4>
                    <p className="text-gray-300">Эксклюзивные привилегии</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="games" className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Популярные игры
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="bg-gray-900/50 border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-lg font-semibold text-white">{game.name}</h4>
                      <p className="text-sm text-gray-300">{game.category}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">HOT</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Button 
                      onClick={handleLogin}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                    >
                      Играть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                onClick={handleLogin}
                variant="outline" 
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
              >
                Смотреть все игры
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-red-900/20 to-black">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Почему выбирают HRUST?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Безопасность</h4>
                <p className="text-gray-300">Лицензированное казино</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Быстро</h4>
                <p className="text-gray-300">Мгновенные выплаты</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Поддержка</h4>
                <p className="text-gray-300">24/7 онлайн помощь</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gamepad2" size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Игры</h4>
                <p className="text-gray-300">1000+ автоматов</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/80 border-t border-red-500/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/img/5276434b-ef2c-4a84-aef4-10832a14359f.jpg" 
              alt="HRUST Casino" 
              className="h-8 w-auto mr-3"
            />
            <span className="text-xl font-bold text-red-500">HRUST CASINO</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Официальное зеркало казино HRUST. Играйте ответственно. 18+
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-red-400 transition-colors">Правила</a>
            <a href="#" className="hover:text-red-400 transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-red-400 transition-colors">Контакты</a>
            <Button 
              onClick={handleLogin}
              variant="link" 
              className="text-red-400 hover:text-red-300 p-0 h-auto"
            >
              Перейти на hrust.casino
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;