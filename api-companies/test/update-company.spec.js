'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const mock = require('../test/mock');
const updateCompany = require('../controllers/update-company');
const db = require('../db/init');

describe('update company', () => {
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
    it('was able to update company', async () => {
        const mockLambdaCallback = sinon.spy();
        const companyId = 1;
        await updateCompany.update({...mock.updateEventMock, path: {id: companyId}}, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.true;
    });
    it('was not able to update company', async () => {
        const mockLambdaCallback = sinon.spy();
        await updateCompany.update({...mock.updateEventMock, path: {id: undefined}}, {}, mockLambdaCallback);
        expect(querySpy.calledOnce).to.be.false;
    });
});
