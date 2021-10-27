import React from 'react';
import './company-card.css';

class CompanyCard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className={'company-card'}>
                <div className={'company-title'}>
                    <div className={'company-name'}>{this.props.name}</div>
                    <div className={'company-location'}>{this.props.location_city}, {this.props.location_state}</div>
                    <div className={'company-more'}><a href={`/details/${this.props.id}`}>more...</a></div>
                </div>
                <div className={'company-description'}>{this.props.description}</div>
            </div>
        );
    }
}

export default CompanyCard;
