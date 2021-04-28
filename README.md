# Homework Task

## Part #1
Проинициализировать папку проекту через npm init, создать в отдельном файле класс работающий с данными в файле, который будет делать следующее: при инициализации класса на вход получает путь к папке для хранения данных и список сущностей, для каждой из которой должен быть свой файл в формате .json. Путь к папке должен задаваться через переменную окружения. Если такой папки не существует то создает. Если файла не существует то создает его. Класс должен иметь методы для create,get,update,delete операций для сущностей. Сущности должны иметь свой айди и доступ в файле к сущности через айди для вышеуказанных методов. Для начала можете создать две сущности User и Post, где юзер может создавать пост с полями id, text, authorId.

## Part #2
Добавить Router Class, который имеет методы отвечающий за все http методы аля router.get('/users', userController.getAll); каждый вызов метода добавляет во внутренний массив роутера объект с урлом, методом и хэндлером. Роутер имеет специальный метод handleRequest(req, res) который будет вызываться при каждом запросе на сервер в http.createServer колбеке, проходится по всем созданым роутам и вызывать нужны хэдлер(контроллер). Роутер инициализируется до создания сервера. В сервисе осуществляется логи и запросы на данные. В контролере вызываются методы сервиса с данными. В моделе используется файл менеджер для работы с конкретной сущностью.

## Todo
 - Добавить обработку ошибок при обращении к базе
 - Добавить "правильную" инициализицию папок/файлов
 - Реализовать методы Router класса


### Stack trace example when user creates in DB:
```
http.createServer(req, res) =>
   router.handleRequest(req, res) =>
   router.post('/users', userController.signupUser) =>
   userController.signupUser(req, res) =>
   userService.createUser(userData) =>
   userModel.create(userData) => 
   DBFileManager.addEntityToFile(entityData) =>
   запись в базу
```

## Questions:
1. Почему при прокидывании await user.init() все записывающие методы в res.on('data') возвращают пустую строку. 
2. Где необходимо использовать http.METHODS.
3. Если в users.js пустой массив то в ответе на клиент возвращать этот массив или сообщение/ошибку?


## Requirments
1. методы запросов и статусы должны браться из констант в http модуле
2. реквест хэдлер должен полностью хэдлить запрос сервера, а не частично хнэдлить, частично в колбеке
3. все остальные константы должны быть в конфиге, локальные переменные хранятся в энве и записываются в конфиг файл, потом он уже используется, для конфига есть либа которая это упрощает
4. Инициализация DBFileManager:
   - нужно сделать так, чтобы пока все база не проинициализируется, сервер не запускался
   - например DBFileManager создается в юзер моделе в поле repository(repository = new DBFileManager), допустим там будет метод onInit, а у вас сервер вызовет listen когда все модели разрезовлят onInit
   - можно сделать обертку для сервера, в которую передаются все модели и там вручную вы слушаете все иниты, и потом запускаете сервер