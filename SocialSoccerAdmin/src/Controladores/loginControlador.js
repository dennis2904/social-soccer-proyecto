const loginctl={}
const passport=require('passport')

loginctl.mostrar=(req,res)=>{
    res.render('login/login')
}

loginctl.login=passport.authenticate('local.signin', {
    seccessRedirect:'/proyecto/agregar/',
    failureRedirect:'/login',
    failureFlash: true
})

loginctl.mostrarRegistro=(req,res)=>{
    res.render('login/registro')
}

loginctl.login=passport.authenticate('local.signin', {
    seccessRedirect:'/cerrarSesion',
    failureRedirect:'/registro',
    failureFlash: true
})

loginctl.cerrar=(req, res, next)=>{
    req.logOut();
    res.redirect('/');
}

module.exports=loginctl