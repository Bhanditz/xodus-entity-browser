angular.module('xodus').directive('linkedEntitiesView', [
    'entitiesService',
    'currentDatabase',
    function (entitiesService, currentDatabase) {
        return {
            restrict: 'E',
            scope: {
                entity: '&',
                linksPager: '&',
                isEditMode: '=',
                onRemove: '&'
            },
            replace: true,
            template: require('../templates/entity-links-view.html'),
            link: function (scope) {
                var entities = entitiesService(currentDatabase.get());
                scope.top = 50;
                var skip = scope.linksPager().entities.length;

                scope.linkedEntities = scope.linksPager().entities;
                scope.loadMore = loadMore;
                scope.hasMore = hasMore;
                scope.removeWithCallback = removeWithCallback;

                function hasMore() {
                    return notNewLinks().length !== scope.linksPager().totalCount;
                }

                function loadMore() {
                    var entity = scope.entity();
                    entities.linkedEntities(entity.id, scope.linksPager().name, scope.top, skip).then(function (linksPager) {
                        Array.prototype.push.apply(scope.linkedEntities, linksPager.entities);
                        skip = notNewLinks().length;
                    });
                }

                function notNewLinks() {
                    return scope.linkedEntities.filter(function (link) {
                        return !link.isNew;
                    })
                }

                function removeWithCallback(linkedEntity) {
                    if (scope.isEditMode) {
                        var found = scope.linkedEntities.find(function (entity) {
                            return entity.id === linkedEntity.id;
                        });
                        if (found) {
                            found.isDeleted = !found.isDeleted;
                            if (scope.onRemove()) {
                                scope.onRemove()(linkedEntity, found.isDeleted);
                            }
                        }
                    }
                }
            }
        };
    }]);
