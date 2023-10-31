function koaCompose (middlewares) {
	return ctx => {
		function dispatch(i) {
			if (i === middlewares.length) return
			let middleware = middlewares[i]
			return middleware(ctx, () => dispatch(i + 1))
		}
		return dispatch(0)
	}
}
const middlewares = [];
 
middlewares.push(async function (ctx, next) {
  console.log("1");
  console.log(ctx.a);
  await next();
  console.log("6");
});
 
middlewares.push(async function (ctx, next) {
  console.log("2");
  await next();
  console.log("5");
});
 
middlewares.push(async function (ctx, next) {
  console.log("3");
  await next();
  console.log("4");
});
// expect output: 1 2 3 4 5 6
koaCompose(middlewares)({a: 100})

function koaCompose(middlewares) {
	return ctx => {
		function dispatch(i) {
			if (i >= middlewares.length) return
			const middleware = middlewares[i]
			return middleware(ctx, () => dispatch(i + 1))
		}
		return dispatch(0)
	}
}