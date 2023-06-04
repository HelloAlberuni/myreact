import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change:currentChange, locale:currentLocale} = this.props;
        const {change:nextChange, locale:nextLocale} = nextProps;

        // console.log(currentChange);
        // console.log(nextChange);
        
        if( currentChange === nextChange && currentLocale === nextLocale ){
            return false;
        }

        return true;
    }

    render(){
        // console.log('rendered button componenet');
        const { change, locale } = this.props;

        return(
            <button type='button' onClick={() => {change(locale)}}>
                {locale === 'en-US' ? 'ঘড়ি পরিবর্তন করুন' : 'Change Clock'}
            </button>
        );
    }
}

export default Button;