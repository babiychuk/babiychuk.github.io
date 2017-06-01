
    $(document).ready(function() {
        $('#defaultForm').bootstrapValidator({
            message: 'This value is not valid',
            fields: {
                username: {
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The username is can\'t be empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'username must be more than 6 symbols'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: 'The username can only consist of alphabetical, number, dot and underscore'
                        }
                    }
                },
                country: {
                    validators: {
                        notEmpty: {
                            message: 'The country is required and can\'t be empty'
                        }
                    }
                },
                acceptTerms: {
                    validators: {
                        notEmpty: {
                            message: 'You have to accept the terms and policies'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and can\'t be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                website: {
                    validators: {
                        uri: {
                            allowLocal: true,
                            message: 'The input is not a valid URL'
                        }
                    }
                },
                phoneNumberUS: {
                    validators: {
                        phone: {
                            message: 'The input is not a valid US phone number'
                        }
                    }
                },
                phoneNumberUK: {
                    validators: {
                        phone: {
                            message: 'The input is not a valid UK phone number',
                            country: 'GB'
                        }
                    }
                },
                color: {
                    validators: {
                        hexColor: {
                            message: 'The input is not a valid hex color'
                        }
                    }
                },
                zipCode: {
                    validators: {
                        zipCode: {

                            country: 'US',
                            message: 'not valid zip code'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and can\'t be empty'
                        },
                        identical: {
                            field: 'confirmPassword',
                            message: 'The password and its confirm are not the same'
                        }
                    }
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {
                            message: 'The confirm password is required and can\'t be empty'
                        },
                        identical: {
                            field: 'password',
                            message: 'The password and its confirm are not the same'
                        }
                    }
                },
                ages: {
                    validators: {
                        lessThan: {
                            value: 100,
                            inclusive: true,
                            message: 'The ages has to be less than 100'
                        },
                        greaterThan: {
                            value: 10,
                            inclusive: false,
                            message: 'The ages has to be greater than or equals to 10'
                        }
                    }
                }
            }
        });
    });
