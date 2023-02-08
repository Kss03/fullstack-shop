// Описываем модели данных

//импорт sequelize из файла db.js
const sequelize = require('../db.js');

//и из самого пакета sequelize импортируем класс datatypes с помощью которого описываются типы того или иного поля (напр. string, integer, array itp...)
const {DataTypes} = require('sequelize');

// И описываем модели
// напр начнем с пользователя (user)

// У sequelize вызывается функция define в которую передаем:
// 1. Название модели (user)
// 2. Объект с описанием полей этой модели

const User = sequelize.define('user', {
    // и прям как запланировали в табличке модели начинаем создавать поля с необходимыми параметрами
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},

    // Описание использованных параметров:
    // type: Datatypes.INTEGER --> тип данных
    // primaryKey: true --> первичный ключ(дает уникальность данных в таблице)
    // autoInctement: true --> автоинкрементирование т.е при создании каждого нового объекта id будет присваиваться автоматически. напр: 1, 2, 3, итд 
});


const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const BasketDevice = sequelize.define('basketdevice', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Device = sequelize. define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    //allowNull: false --> не позволит присвоить "отсутствующие" данные ( не может быть пустым)
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    //img строка т.к будет просто название файла и его расширение
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

// дополнительная промежуточная таблица для type и brand
const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})


//Описание того, КАК все эти модели связаны друг с другом 
// для этого обращаемся к моделям и вызываем следующие функции: 

User.hasOne(Basket)
Basket.belongsTo(User)

// hasOne - отношение 1 к 1
// hasMany - одна ко многим
// balongsTo - означает что эта сущность принадлежит другой
// belongsToMany - для связи "многих ко многим". При этом типу всязей создается еще одна промежуточная таблица, для которой также нужно создать отдельную модель


User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

// связь многих со многими с промежуточной таблицей

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

// Экспортируем все модели
module.exports ={
    User,
    Basket,
    BasketDevice,
    Rating, 
    Type,
    Device,
    DeviceInfo,
    Brand,
    TypeBrand,
}

