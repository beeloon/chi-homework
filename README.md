# Homework Task

## Part #1
Проинициализировать папку проекту через npm init, создать в отдельном файле класс работающий с данными в файле, который будет делать следующее: при инициализации класса на вход получает путь к папке для хранения данных и список сущностей, для каждой из которой должен быть свой файл в формате .json. Путь к папке должен задаваться через переменную окружения. Если такой папки не существует то создает. Если файла не существует то создает его. Класс должен иметь методы для create,get,update,delete операций для сущностей. Сущности должны иметь свой айди и доступ в файле к сущности через айди для вышеуказанных методов. Для начала можете создать две сущности User и Post, где юзер может создавать пост с полями id, text, authorId.

## Part #2
Добавить Router Class, который имеет методы отвечающий за все http методы аля router.get('/users', userController.getAll); каждый вызов метода добавляет во внутренний массив роутера объект с урлом, методом и хэндлером. Роутер имеет специальный метод handleRequest(req, res) который будет вызываться при каждом запросе на сервер в http.createServer колбеке, проходится по всем созданым роутам и вызывать нужны хэдлер(контроллер). Роутер инициализируется до создания сервера. В сервисе осуществляется логи и запросы на данные. В контролере вызываются методы сервиса с данными. В моделе используется файл менеджер для работы с конкретной сущностью.

## Todo
 - Добавить deep clone при создании нового объекта
 - Обдумать измeнение обьекта через update