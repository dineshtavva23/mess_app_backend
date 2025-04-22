const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = 5500;
const app1Routes = require('./backend_student_login_verification');
const app2Routes = require('./backend_admin_login_verification');
const app3Routes = require('./backend_deploy_mess_registration');
const app4Routes = require('./backend_current_mess_registration');

app.use('/student',app1Routes);
app.use('/admin',app2Routes);
app.use('/',app3Routes);
app.use('/',app4Routes);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
