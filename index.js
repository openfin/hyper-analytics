'use strict';

module.exports = {
    JSDataSource: require('./js/DataSource'),
    DataSourceSorter: require('./js/DataSourceSorter'),
    DataSourceSorterComposite: require('./js/DataSourceSorterComposite'),
    DataSourceGlobalFilter: require('./js/DataSourceGlobalFilter'),
    DataSourceGroupView: require('./js/DataSourceGroupView'),
    DataSourceAggregator: require('./js/DataSourceAggregator'),
    DataSourceTreeview: require('./js/DataSourceTreeview'),
    DataSourceTreeviewFilter: require('./js/DataSourceTreeviewFilter'),
    DataSourceTreeviewSorter: require('./js/DataSourceTreeviewSorter'),
    DataNodeGroupSorter: require('./js/DataNodeGroupSorter'),
    util: {
        aggregations: require('./js/util/aggregations'),
        Mappy: require('./js/util/Mappy'),
        stableSort: require('./js/util/stableSort'),
        headerify: require('./js/util/headerify')
    }
};
