import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function ContactForm(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [success, setSuccess] = useState('');


    useEffect(() => {
        let newErrors = {};
    
        Object.keys(formData).forEach(name => {
          const error = validateFormData(name, formData[name]);
          if (error) {
            newErrors[name] = error;
          }
        });
    
        setErrors(newErrors);
      }, [formData]);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateFormData = (name, value) => {
        let error = '';
      
        if (name === 'firstName' && !value) {
            error = 'First name is required';   
        } else if (name === 'lastName' && !value) {
            error = 'Last name is required';
        } else if (name === 'email') {
            if (!value) {
                error = 'Email is required';
            } else if (!validateEmail(value)) {
                error = 'Invalid email format';
            }
        } else if (name === 'message' && !value) {
            error = 'Message is required';
        }
      
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

        setTouched(prevTouched => ({
            ...prevTouched,
            [name]: true
          }));
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formElements = e.target.elements;
        let newErrors = {};
        
        Object.keys(formElements).forEach(key => {
            const element = formElements[key];
            if (element.name) {
                const error = validateFormData(element.name, element.value);
                if (error) {
                    newErrors[element.name] = error;
                }
            }
        });

        setErrors(newErrors);
    
        if (Object.values(newErrors).every(error => !error)) {
            console.log('Form submitted!');
            console.log(formData);
            setSuccess('Your message has been sent!');
        }
    };


    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  required
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                />
                {touched.firstName &&  <Typography color="danger">{errors.firstName}</Typography>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  autoComplete="family-name"
                  onChange={handleChange}
                />
                {touched.lastName && <Typography color="warning">{errors.lastName}</Typography>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  autoComplete="email"
                  onChange={handleChange}
                />
                {touched.email && <Typography color="warning">{errors.email}</Typography>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  // rows={4}
                  // rowsMax={Infinity}
                />
                {touched.message && <Typography color="warning">{errors.message}</Typography>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            {success && <p>{success}</p>}
          </Box>
        </Box>
      </Container>
    )
}