'use strict';

const InventoryItem = require('./inventoryItem');
const Order = require('./order');
const OrderItem = require('./orderItem');
const User = require('./user');
const Log = require('./logs');
const Conversation = require('./conversation');
const Runner = require('./runner');

// Assosiations
OrderItem.belongsTo(Order ,{ onDelete: 'SET NULL', onUpdate: 'CASCADE' });
OrderItem.belongsTo(InventoryItem ,{ onDelete: 'SET NULL', onUpdate: 'CASCADE' });

//Log.belongsTo(User);
//Log.belongsTo(Conversation);

//Conversation.belongsTo(User);

Order.hasMany(OrderItem);
Runner.hasMany(Order);

InventoryItem.belongsToMany(InventoryItem,
	{
		as: 'Variants',
		through: 'InventoryItemsVariants',
		foreignKey: 'id',
	});
InventoryItem.belongsToMany(InventoryItem,
	{
		as: 'ComplexProducts',
		through: 'InventoryItemsComplexProducts',
		foreignKey: 'id',
	});

// Exports
module.exports.InventoryItem = InventoryItem;
module.exports.Order = Order;
module.exports.OrderItem = OrderItem;
module.exports.Log = Log;
module.exports.User = User;
module.exports.Conversation = Conversation;
module.exports.Runner = Runner;

module.exports.Models = [InventoryItem, Order, OrderItem, User, Conversation, Log, Runner];

