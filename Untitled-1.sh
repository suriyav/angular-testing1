for NAME in `cut -d: -f1 /etc/passwd`; do uids=`id -u $NAME` && if [ $uids -ge 500 -a $uids != 65534 ] then chage -m 7 -M 90 -W 28 -I 7 $NAME  fi;done
