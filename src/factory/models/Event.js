import {
  createEvent,
  editEvent,
  getEventDetails
} from '../../actions/event';
import * as mode from '../modes';
;
const Event = {
  key: 'event',
  label: 'Event',
  labelPlural: 'Events',
  mapStateToProps: state => ({ current: state.event.current }),
  actions: {
    create: createEvent,
    edit: editEvent,
    get: getEventDetails,
  },
  fields: [
    {
      key: 'name',
      label: 'Event Title',
      type: 'text',
      errorKey: 'nameError'
    },
    {
      key: 'description',
      label: 'Event Description',
      type: 'longtext',
      errorKey: 'contentError'
    }
  ]
};

export default Event;