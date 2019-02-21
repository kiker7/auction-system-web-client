// import React from 'react';
// import {Field, reduxForm} from 'redux-form';
// import PropTypes from 'prop-types';
//
// class Signin extends React.Component {
//   submit = (values) => {
//     console.log(values); // eslint-disable-line no-console
//   };
//
//   render(){
//     const {handleSubmit} = this.props;
//     return (
//       <div className="form">
//         <form onSubmit={ handleSubmit(this.submit) }>
//           <Field
//             name="username"
//             component="input"
//             type="text"
//             placeholder="User name"
//           />
//           <Field
//             name="password"
//             component="input"
//             type="password"
//             placeholder="Password"
//           />
//           <button type="submit">Sign In</button>
//         </form>
//       </div>
//     );
//   }
// }
//
// Signin.propTypes = {
//   handleSubmit: PropTypes.func.isRequired
// };
//
// export default reduxForm({
//   form: 'signin'
//   })(Signin);
