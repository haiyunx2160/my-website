import React from 'react';
import {Field, reduxForm} from "redux-form";


class Contact extends React.Component {

    style = {
        position: 'absolute',
        top: '9%',
        height: '80vh',
        display: 'inline-block',
        marginLeft: '40%',
    };


    //redux form handling

    renderError({error, touched}) {

        if (error && touched) {
            return <small className='text-danger'>{error}</small>
        }
        return '';
    }

    renderInput = ({input, label, meta}) => {
        const textDanger = `${meta.error && meta.touched ? 'text-danger' : ''}`;
        return (
            <div className='form-group'>
                <label className={textDanger}>{label}</label>
                <input className='form-control'
                       autoComplete='off'
                       {...input}/>

                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit(formValues) {
        console.log(formValues)
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} style={{width: '30%', marginTop: '8%'}}>
                    <Field name='name'
                           label='Name'
                           component={this.renderInput}/>
                    <Field name='email'
                           label='Email'
                           type='email'
                           component={this.renderInput}/>
                    <Field name='message'
                           label='Message'
                           component={this.renderInput}/>

                    <button className="btn btn-warning" style={{marginLeft: '70%'}}>Submit</button>
                </form>
                <img src={require('../images/contact.jpg')} style={this.style} alt=""/>
            </div>

        );
    }

    // form handling without redux
    /*  constructor(props) {
          super(props);
          this.state = {name: '', email: '', message: ''};

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
          const value = event.target.value;
          const name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(this.props)
      }

      handleSubmit(event) {

          console.log(this.refs)
          event.preventDefault();
      }

      style = {
          position: 'absolute',
          top: '9%',
          height: '80vh',
          display: 'inline-block',
          marginLeft: '40%',
      };

      render() {
          return (
              <div className='container'>
                  <form onSubmit={this.handleSubmit} style={{width: '30%', marginTop: '8%'}} ref='form'>
                      <div className="form-group">
                          <label>Name</label>
                          <input type="text"
                                 value={this.state.name}
                                 onChange={this.handleChange}
                                 name='name'
                                 ref='name'
                                 className="form-control"
                                 placeholder="Enter Name"/>
                      </div>
                      <div className="form-group">
                          <label>Email</label>
                          <input type="email"
                                 ref='email'
                                 value={this.state.email}
                                 onChange={this.handleChange}
                                 name='email'
                                 className="form-control"
                                 required
                                 placeholder="Enter email"/>
                      </div>
                      <div className="form-group">
                          <label>Password</label>
                          <textarea className="form-control"
                                    ref='message'
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    rows={6}
                                    name='message'
                                    required
                                    placeholder="Leave a message"/>
                      </div>
                      <button className="btn btn-warning" style={{marginLeft: '70%'}}>Submit</button>
                  </form>

                  <img src={require('../images/contact.jpg')} style={this.style} alt=""/>
              </div>
          );
      }*/
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'Please enter your name';
    }

    if (!formValues.email) {
        errors.email = 'Please enter your email';
    }

    if (!formValues.message) {
        errors.message = 'Please leave a message';
    }

    return errors;
};

export default reduxForm(
    {
        form: 'formContct',
        validate
    }
)(Contact);
