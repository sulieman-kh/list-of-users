
const fastify = require('fastify')({ logger: true });
const handlebars = require('handlebars');
const path = require('path');

// Render handlebars
fastify.register(require("@fastify/view"), {
	engine: {
		handlebars: handlebars
	},
	root: path.join(__dirname, 'views'),
	layout: "layouts/main",
	propertyName: "render",
});

// Support Media Type: application/x-www-form-urlencoded
fastify.register(require('@fastify/formbody'));


// Basic security headers for Fastify 
const helmet = require('@fastify/helmet')
fastify.register(
	helmet,
	{ contentSecurityPolicy: false }
)



// Router
fastify.register(require('./routes/users'));


const start = async (req, res) => {
	try {
		await fastify.listen({ port: 3000 })
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
