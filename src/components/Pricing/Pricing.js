import React from 'react'
import { Button } from '../../globalStyles.js';
import { PricingContainer,
    PricingPrimaryHeading,
    PricingRow,
    PricingColumn,
    PricingSecondaryHeading,
    SubCostField,
    CostField,
    PropertiesList,
    Property,
 } from './Pricing.elements';
    import { GiCrystalBars,GiCutDiamond,GiFloatingCrystal } from 'react-icons/gi'
    import { IconContext } from 'react-icons/lib';

const Pricing = () => {
    return (
        <IconContext.Provider value={{color: '#a9b3c1',size: 64}}>
        <PricingContainer>
            <PricingPrimaryHeading>Our Services</PricingPrimaryHeading>
            <PricingRow>
                <PricingColumn>
                    <GiCrystalBars/>
                <PricingSecondaryHeading>Starter Pack</PricingSecondaryHeading>
                <CostField>$99.99</CostField>
                <SubCostField>per month</SubCostField>
                <PropertiesList>
                    <Property>100 New Users</Property>
                    <Property>$10.000 Budget</Property>
                    <Property>Retargeting analytics</Property>
                </PropertiesList>
                <Button>Choose Plan</Button>
                </PricingColumn>
                <PricingColumn>
                    <GiCutDiamond/>
                <PricingSecondaryHeading>Gold Rush</PricingSecondaryHeading>
                <CostField>$299.99</CostField>
                <SubCostField>per month</SubCostField>
                <PropertiesList>
                    <Property>100 New Users</Property>
                    <Property>$50.000 Budget</Property>
                    <Property>Lean Gen analytics</Property>
                </PropertiesList>
                <Button>Choose Plan</Button>
                </PricingColumn>
                <PricingColumn>
                <GiFloatingCrystal/>
                <PricingSecondaryHeading>Diamong Kings</PricingSecondaryHeading>
                <CostField>$999.99</CostField>
                <SubCostField>per month</SubCostField>
                <PropertiesList>
                    <Property>Unlimited Users</Property>
                    <Property>Unlimited Budget</Property>
                    <Property>24/7 Support</Property>
                </PropertiesList>
                <Button>Choose Plan</Button>
                </PricingColumn>
                
                
            </PricingRow>

        </PricingContainer>
        </IconContext.Provider>
    )
}

export default Pricing
