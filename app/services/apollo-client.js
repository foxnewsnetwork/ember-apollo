import Ember from 'ember';
import ApolloClient from 'npm:apollo-client';
import ENV from '../config/environment';

export default Ember.Service.extend({
  client: new ApolloClient.default(ENV.ApolloClient)
});
