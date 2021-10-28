'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const deleteCompany = require('../controllers/delete-company');
const db = require('../db/init');

describe('delete company', () => {
    let querySpy = sinon.spy();
    beforeEach(() => {
        sinon.stub(db, 'init').resolves({
            query: querySpy
        });
    });
    afterEach(() => {
        querySpy.resetHistory();
        db.init.restore();
    });
    it('was able to delete company', async () => {
        const deleteMockLambdaCallback = sinon.spy();
        const companyId = 1;
        await deleteCompany.delete({path: {id: companyId}}, {}, deleteMockLambdaCallback);
        expect(querySpy.calledOnce).to.be.true;
    });
    it('was not able to delete company', async () => {
        const deleteMockLambdaCallback = sinon.spy();
        await deleteCompany.delete({path: {id: undefined}}, {}, deleteMockLambdaCallback);
        expect(querySpy.calledOnce).to.be.false;
    });
});
