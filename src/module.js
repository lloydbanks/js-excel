console.log('it works!!')

async function f() {
	return Promise.resolve('async works')
}

f().then(console.log)